import {
  Browser,
  Builder,
  type By,
  until,
  type WebDriver,
  type WebElement,
} from 'selenium-webdriver';
import fs from 'fs';
import { messageFormat } from '@kodekonveyor/cdd-ts';
export const BASE64 = 'base64';

const NOTE_BORDER_COLOR = 'red';
const NOTE_BORDER_STYLE = 'solid';
const NOTE_BORDER_WIDTH = '5px';
const RESTORE_BORDER_JS =
  "document.querySelector('{1}').style.border='{2} {3} {4}'";
const RESTORE_BORDER_JS_XPATH =
  "document.evaluate('{1}',document).iterateNext().style.border='{2} {3} {4}'";
const BORDER_STYLE = 'border-style';
const BORDER_COLOR = 'border-color';
const BORDER_WIDTH = 'border-width';
const NEWLINE = '\n';
const STORY_BODY = '<html><body><ul>{1}</ul></body></html>';
const STEP_ITEM =
  '<li>{1}<br/><img src="{2}" alt="{1}" style="width:640px;"/></li>';
export class UITester {
  driver!: WebDriver;
  plan: Array<() => Promise<UITester>> = [];
  element!: WebElement;
  selector!: By;
  stepNo = 0;
  story: Array<[string, string]> = [];

  async init(): Promise<UITester> {
    this.driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    return this;
  }

  goTo(url: string): this {
    this.plan.push(async () => {
      await this.driver.get(url);
      return this;
    });
    return this;
  }

  waitFor(by: By): this {
    this.plan.push(async () => {
      return await this.doWaitFor(by);
    });
    return this;
  }

  async doWaitFor(by: By): Promise<this> {
    this.selector = by;
    this.element = await this.driver.wait(until.elementLocated(by));
    await this.driver.wait(until.elementIsEnabled(this.element));
    await this.driver.wait(until.elementIsVisible(this.element));
    return this;
  }

  click(explanation: string): this {
    this.plan.push(async (): Promise<this> => {
      await this.doWaitFor(this.selector);
      await this.doScreenShot(explanation);
      await this.element.click();
      return this;
    });
    return this;
  }

  lookAt(by: By): this {
    this.plan.push(async (): Promise<this> => {
      return await this.doWaitFor(by);
    });
    return this;
  }

  enter(explanation: string, value: string): this {
    this.plan.push(async (): Promise<this> => {
      await this.element.sendKeys(value);
      return await this.doScreenShot(explanation);
    });
    return this;
  }

  async doScreenShot(explanation: string): Promise<this> {
    const origWidth = await this.element.getCssValue(BORDER_WIDTH);
    const origColor = await this.element.getCssValue(BORDER_COLOR);
    const origStyle = await this.element.getCssValue(BORDER_STYLE);
    const template =
      this.selector.using === 'css selector'
        ? RESTORE_BORDER_JS
        : RESTORE_BORDER_JS_XPATH;
    const script = messageFormat(
      template,
      this.selector.value,
      NOTE_BORDER_WIDTH,
      NOTE_BORDER_STYLE,
      NOTE_BORDER_COLOR
    );
    await this.driver.executeScript(script);

    const screenshot = await this.driver.takeScreenshot();
    const restoreScript = messageFormat(
      template,
      this.selector.value,
      origWidth,
      origStyle,
      origColor
    );
    await this.driver.executeScript(restoreScript);

    const decode = Buffer.from(screenshot, BASE64);
    const filenameBase = String(this.stepNo) + '.png';
    const fileName = 'target/' + filenameBase;
    fs.writeFileSync(fileName, decode);
    this.story.push([explanation, filenameBase]);
    return this;
  }

  screenshot(explanation: string): this {
    this.plan.push(async () => {
      return await this.doScreenShot(explanation);
    });
    return this;
  }

  check(): { check: () => Promise<number> } {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    return {
      async check() {
        let runner = await self.init();
        for (const step of self.plan) {
          runner = await step.call(runner);
          runner.stepNo++;
        }
        await runner.driver.quit();
        const storyHtml = messageFormat(
          STORY_BODY,
          runner.story
            .map((value) => messageFormat(STEP_ITEM, value[0], value[1]))
            .join(NEWLINE)
        );
        // eslint-disable-next-line kodekonveyor/no-literals
        fs.writeFileSync('target/story.html', storyHtml);
        return runner.stepNo;
      },
    };
  }
}
