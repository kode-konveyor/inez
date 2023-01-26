package com.kodekonveyor.integrationtests;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.io.File;
import java.io.IOException;
import java.text.MessageFormat;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

class SeleniumTestHelper {

	private static final String NOTE_BORDER_COLOR = "red";
	private static final String NOTE_BORDER_STYLE = "solid";
	private static final String NOTE_BORDER_WIDTH = "5px";
	private static final String COULD_NOT_FIND = "Could not find ";
	private static final String NO_CSS_SELECTOR = "";
	private static final String RESTORE_BORDER_JS = "document.querySelector(''{0}'').style.border=''{1} {2} {3}''";
	private static final String SSREENSHOT_FILE_NAME = "target/{0}_{1}.png";
	private static final String BORDER_STYLE = "border-style";
	private static final String BORDER_COLOR = "border-color";
	private static final String BORDER_WIDTH = "border-width";
	private static final String VALUE = "value";
	private static final String INPUT = "input";
	private final FirefoxDriver driver;
	private static Integer step = 0;
	private WebElement element;
	private String cssSelector;

	SeleniumTestHelper() {
		final FirefoxProfile profile = new FirefoxProfile();
		profile.setAcceptUntrustedCertificates(true);
//		final DesiredCapabilities caps = DesiredCapabilities.firefox();
//		caps.setCapability(FirefoxDriver.PROFILE, profile);

		profile.setAssumeUntrustedCertificateIssuer(false);

		final FirefoxOptions firefoxOptions = new FirefoxOptions();
		firefoxOptions.addArguments(IntegrationtestsConstants.HEADLESS);
		firefoxOptions.addPreference("security.ssl.enable_ocsp_stapling", false);
		driver = new FirefoxDriver(firefoxOptions);

	}

	SeleniumTestHelper(final SeleniumTestHelper previous,
			final WebElement element) {
		driver = previous.getDriver();
		cssSelector = previous.cssSelector;
		this.element = element;
	}

	public FirefoxDriver getDriver() {
		return driver;
	}

	public WebElement waitFor(final String cssSelector) {
		final WebDriverWait wait = new WebDriverWait(driver,
				IntegrationtestsConstants.WAIT_TIME);
		return wait.until(
				ExpectedConditions.elementToBeClickable(By.cssSelector(cssSelector)));
	}

	public SeleniumTestHelper goToPage(final String reason, final String url)
			throws Exception {
		cssSelector = NO_CSS_SELECTOR;
		driver.get(url);
		takeScreenshot(reason);
		return this;
	}

	private void takeScreenshot(final String reason) throws IOException {
		String origWidth = null;
		String origColor = null;
		String origStyle = null;

		if (!NO_CSS_SELECTOR.equals(cssSelector)) {
			origWidth = element.getCssValue(BORDER_WIDTH);
			origColor = element.getCssValue(BORDER_COLOR);
			origStyle = element.getCssValue(BORDER_STYLE);
			driver.executeScript(MessageFormat.format(
					RESTORE_BORDER_JS,
					cssSelector, NOTE_BORDER_WIDTH, NOTE_BORDER_STYLE,
					NOTE_BORDER_COLOR));
		}
		final File screenshot = driver.getScreenshotAs(OutputType.FILE);
		final Integer stepNumber = step++;
		final File destFile = new File(MessageFormat.format(
				SSREENSHOT_FILE_NAME,
				stepNumber.toString(),
				reason));
		FileUtils.copyFile(screenshot, destFile);
		if (!NO_CSS_SELECTOR.equals(cssSelector)) {
			driver.executeScript(MessageFormat.format(
					RESTORE_BORDER_JS,
					cssSelector, origWidth, origStyle, origColor));
		}
	}

	public SeleniumTestHelper lookAtElement(final String cssSelector)
			throws Exception {

		this.cssSelector = cssSelector;
		try {
			final WebElement element = waitFor(cssSelector);
			return new SeleniumTestHelper(this, element);
		} catch (final TimeoutException exception) {
			final String reason = COULD_NOT_FIND + cssSelector;
			this.cssSelector = NO_CSS_SELECTOR;
			takeScreenshot(reason);
			throw exception;
		}

	}

	public SeleniumTestHelper checkText(final String reason, final String text)
			throws IOException {
		takeScreenshot(reason);
		if (INPUT.equals(element.getTagName())) {
			assertEquals(text, element.getAttribute(VALUE));
		} else {
			assertEquals(text, element.getText());
		}
		return this;
	}
	public String getText(final String reason)
			throws IOException {
		takeScreenshot(reason);
		if (INPUT.equals(element.getTagName())) {
			return element.getAttribute(VALUE);
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
		return click("Click there");
	}

	public SeleniumTestHelper click(final String reason) throws Exception {
		takeScreenshot(reason);
		element.click();
		return this;
	}

}
