package com.kodekonveyor.integrationtests.helper;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.kodekonveyor.integrationtests.IntegrationtestsConstants;


public class SeleniumTestHelper {

  private static final String SCROLLER_SCRIPT = "arguments[0].scrollIntoView(false);";
  private static final String CLICK_THERE = "Click there";
  private static final String ID = "id";
  private static final String HASHTAG = "#";
  private final WebDriver driver;
  private static Integer step = 0;
  private WebElement element;
  private String cssSelector;
  private final TestPlatform platform;
  private final WebDriverWait wait;

  public SeleniumTestHelper(final TestPlatform platform) throws IOException {
	  this.platform = platform;
	  driver = platform.makeDriver();
	   wait = new WebDriverWait(driver,
	            IntegrationtestsConstants.WAIT_TIME);

  }


  SeleniumTestHelper(final SeleniumTestHelper previous,
    final WebElement element) {
    driver = previous.getDriver();
    cssSelector = previous.cssSelector;
    this.element = element;
    this.platform = previous.platform;
    this.wait = previous.wait;
  }

  public WebDriver getDriver() {
    return driver;
  }

  public WebElement waitFor(final String cssSelector) {
    return waitFor(By.cssSelector(cssSelector));
  }


private WebElement waitFor(final By selector) {
    WebElement found = wait.until(
        ExpectedConditions.presenceOfElementLocated(selector));
    ((JavascriptExecutor) driver).executeScript(SCROLLER_SCRIPT, found);
    wait.until(
            ExpectedConditions.elementToBeClickable(selector));
    return found;
}

  public WebElement waitForXpath(final String cssSelector) throws InterruptedException {
    return waitFor(By.xpath(cssSelector));
  }


  public SeleniumTestHelper takeScreenshot(
			final String reason) throws IOException {
	  platform.takeScreenshot(reason, step, element, cssSelector);
	  step++;
	  return this;
  }

  public SeleniumTestHelper switchToContext(final String context) throws InterruptedException {
	  platform.switchToContext(context);
	  return this;
	}

	
  public SeleniumTestHelper lookAtElement(final String cssSelector)
      throws Exception {

    this.cssSelector = cssSelector;
    try {
      element = waitFor(cssSelector);
      return this;
    } catch (final TimeoutException exception) {
      final String reason = SeleniumTestConstants.COULD_NOT_FIND + cssSelector;
      this.cssSelector = SeleniumTestConstants.NO_CSS_SELECTOR;
      takeScreenshot(reason);
      throw exception;
    }

  }

  public SeleniumTestHelper lookAtElementXpath(final String xpath)
      throws Exception {
    try {
      final WebElement element = waitForXpath(xpath);
      this.cssSelector = HASHTAG + element.getDomAttribute(ID);
      return new SeleniumTestHelper(this, element);
    } catch (final TimeoutException exception) {
      final String reason = SeleniumTestConstants.COULD_NOT_FIND + xpath;
      this.cssSelector = SeleniumTestConstants.NO_CSS_SELECTOR;
      takeScreenshot(reason);
      throw exception;
    }

  }

  public SeleniumTestHelper checkText(final String reason, final String text)
      throws IOException {
    takeScreenshot(reason);
    if (SeleniumTestConstants.INPUT.equals(element.getTagName())) {
      assertEquals(text, element.getAttribute(SeleniumTestConstants.VALUE));
    } else {
      assertEquals(text, element.getText());
    }
    return this;
  }

  public String getText(final String reason)
      throws IOException {
    takeScreenshot(reason);
    if (SeleniumTestConstants.INPUT.equals(element.getTagName())) {
      return element.getAttribute(SeleniumTestConstants.VALUE);
    } else {
      return element.getText();
    }
  }

  public SeleniumTestHelper enter(final String reason, final String text)
      throws Exception {
    element.sendKeys(text);
    takeScreenshot(reason);
    return this;
  }

  public SeleniumTestHelper click() throws Exception {
    return click(CLICK_THERE);
  }

  public SeleniumTestHelper click(final String reason) throws Exception {
    takeScreenshot(reason);
    element.click();
    return this;
  }

}
