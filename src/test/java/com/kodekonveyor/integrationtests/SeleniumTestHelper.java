package com.kodekonveyor.integrationtests;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.io.File;
import java.io.IOException;
import java.text.MessageFormat;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

class SeleniumTestHelper {

	private static final String VALUE = "value";
	private static final String INPUT = "input";
	private final FirefoxDriver driver;
	private static Integer step = 0;
	private WebElement element;
	private String cssSelector;

	SeleniumTestHelper() {
		final FirefoxProfile profile = new FirefoxProfile();
		profile.setAcceptUntrustedCertificates(true);
		final DesiredCapabilities caps = DesiredCapabilities.firefox();
		caps.setCapability(FirefoxDriver.PROFILE, profile);

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
		cssSelector = null;
		driver.get(url);
		takeScreenshot(reason);
		return this;
	}

	private void takeScreenshot(final String reason) throws IOException {
		String origWidth = null;
		String origColor = null;
		String origStyle = null;

		if (null != cssSelector) {
			origWidth = element.getCssValue("border-width");
			origColor = element.getCssValue("border-color");
			origStyle = element.getCssValue("border-style");
			driver.executeScript("document.querySelector('" + cssSelector
					+ "').style.border='5px solid red'");
		}
		final File screenshot = driver.getScreenshotAs(OutputType.FILE);
		final Integer stepNumber = step++;
		final File destFile = new File(MessageFormat.format(
				"target/{0}_{1}.png",
				stepNumber.toString(),
				reason));
		FileUtils.copyFile(screenshot, destFile);
		System.out.println(destFile.getAbsolutePath());
		if (null != cssSelector) {
			final String script = "document.querySelector('" + cssSelector
					+ "').style.border='" + origWidth + " " + origStyle + " " + origColor
					+ "'";
			System.out.println(script);
			driver.executeScript(script);
		}
	}

	public SeleniumTestHelper lookAtElement(final String cssSelector)
			throws Exception {
		this.cssSelector = cssSelector;
		try {
			final WebElement element = waitFor(cssSelector);
			return new SeleniumTestHelper(this, element);
		} catch (final Exception e) {
			final String reason = "Could not find " + cssSelector;
			this.cssSelector = null;
			takeScreenshot(reason);
			throw (e);
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
