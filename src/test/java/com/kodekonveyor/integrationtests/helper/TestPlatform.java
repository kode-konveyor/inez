package com.kodekonveyor.integrationtests.helper;

import java.io.File;
import java.io.IOException;
import java.text.MessageFormat;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.kodekonveyor.annotations.InterfaceClass;

@InterfaceClass
public interface TestPlatform {

	String getDocDir();

	RemoteWebDriver getDriver();

	WebDriver makeDriver() throws IOException;

	void switchToContext(String context) throws InterruptedException;

	default void takeScreenshot(final String reason,
			final SeleniumTestHelper helper) throws IOException {
		final RemoteWebDriver driver = getDriver();

		String origWidth = null;
		String origColor = null;
		String origStyle = null;

		final String cssSelector = helper.getCssSelector();
		if (!SeleniumTestConstants.NO_CSS_SELECTOR
				.equals(cssSelector)) {
			final WebElement element = helper.getElement();
			origWidth = element.getCssValue(SeleniumTestConstants.BORDER_WIDTH);
			origColor = element.getCssValue(SeleniumTestConstants.BORDER_COLOR);
			origStyle = element.getCssValue(SeleniumTestConstants.BORDER_STYLE);
			final String script = MessageFormat.format(
					SeleniumTestConstants.RESTORE_BORDER_JS, cssSelector,
					SeleniumTestConstants.NOTE_BORDER_WIDTH,
					SeleniumTestConstants.NOTE_BORDER_STYLE,
					SeleniumTestConstants.NOTE_BORDER_COLOR);
			driver.executeScript(script);
		}
		final File screenshot = driver.getScreenshotAs(OutputType.FILE);
		final Integer stepNumber = helper.getStep() + 1;
		final String imagePath = MessageFormat.format(
				SeleniumTestConstants.SREENSHOT_FILE_NAME,
				getDocDir(),
				stepNumber.toString());
		final Step step = new Step(
				reason,
				imagePath);
		helper.getSteps().add(step);
		final File destFile = new File(imagePath);
		FileUtils.copyFile(screenshot, destFile);
		if (!SeleniumTestConstants.NO_CSS_SELECTOR.equals(cssSelector)) {
			driver.executeScript(MessageFormat.format(
					SeleniumTestConstants.RESTORE_BORDER_JS, cssSelector, origWidth,
					origStyle, origColor));
		}

	}

}
