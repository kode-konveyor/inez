package com.kodekonveyor.integrationtests;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.io.IOException;

import org.openqa.selenium.By;
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
	private WebElement element;

	SeleniumTestHelper() { 
		final FirefoxProfile profile = new FirefoxProfile();
		profile.setAcceptUntrustedCertificates(true);
		final DesiredCapabilities caps = DesiredCapabilities.firefox();
		caps.setCapability(FirefoxDriver.PROFILE, profile);

		profile.setAssumeUntrustedCertificateIssuer(false);

		final FirefoxOptions firefoxOptions = new FirefoxOptions();
		firefoxOptions.addArguments(IntegrationtestsConstants.HEADLESS);
		firefoxOptions.addPreference("security.ssl.enable_ocsp_stapling",
				false);
		driver = new FirefoxDriver(firefoxOptions);

	}

	SeleniumTestHelper(final SeleniumTestHelper previous, final WebElement element) {
		driver = previous.getDriver();
		this.element = element;
	}

	public FirefoxDriver getDriver() {
		return driver;
	}

	public WebElement waitFor(final String cssSelector) {
		final WebDriverWait wait = new WebDriverWait(driver,
				IntegrationtestsConstants.WAIT_TIME);
		return wait.until(ExpectedConditions
				.elementToBeClickable(By.cssSelector(cssSelector)));
	}

	public SeleniumTestHelper goToPage(final String url) {
		driver.get(url);
		return this;
	}

	public SeleniumTestHelper lookAtElement(final String cssSelector) {
		final WebElement element = waitFor(cssSelector);
		return new SeleniumTestHelper(this, element);
	}

	public SeleniumTestHelper checkText(final String text) throws IOException {
		if (INPUT.equals(element.getTagName())) {
			assertEquals(text, element.getAttribute(VALUE));
		} else {
			assertEquals(text, element.getText());
		}
		return this;
	}

	public SeleniumTestHelper enter(final String text) {
		element.sendKeys(text);
		return this;
	}

	public SeleniumTestHelper click() {
		element.click();
		return this;
	}

}
