package com.kodekonveyor.integrationtests.helper;

import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

import com.kodekonveyor.annotations.InterfaceClass;
import com.kodekonveyor.integrationtests.IntegrationtestsConstants;

import lombok.Getter;

@InterfaceClass
public class FirefoxTestPlatform implements TestPlatform {

	private static final String SECURITY_SSL_ENABLE_OCSP_STAPLING = "security.ssl.enable_ocsp_stapling";
	private final String appUrl;

	@Getter
	private FirefoxDriver driver;
	@Getter
	private final String docDir;

	public FirefoxTestPlatform(final String appUrl, final String docDir) {
		this.appUrl = appUrl;
		this.docDir = docDir;
	}

	@Override
	public FirefoxDriver makeDriver() {
		final FirefoxOptions firefoxOptions = new FirefoxOptions();
		firefoxOptions.addArguments(IntegrationtestsConstants.HEADLESS);
		firefoxOptions.addPreference(SECURITY_SSL_ENABLE_OCSP_STAPLING, false);
		driver = new FirefoxDriver(firefoxOptions);
		driver.get(appUrl);
		return driver;
	}

	@Override
	public void switchToContext(final String context) {
	}

}
