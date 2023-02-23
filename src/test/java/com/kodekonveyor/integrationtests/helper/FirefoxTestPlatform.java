package com.kodekonveyor.integrationtests.helper;

import java.io.File;
import java.io.IOException;
import java.text.MessageFormat;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

import com.kodekonveyor.annotations.InterfaceClass;
import com.kodekonveyor.integrationtests.IntegrationtestsConstants;

@InterfaceClass
public class FirefoxTestPlatform implements TestPlatform {
	 private static final String SECURITY_SSL_ENABLE_OCSP_STAPLING = "security.ssl.enable_ocsp_stapling";
	private FirefoxDriver myDriver;
	private final String appUrl;

	public FirefoxTestPlatform(final String appUrl) {
		this.appUrl = appUrl;
	}

	@Override
	public FirefoxDriver makeDriver() {
		final FirefoxOptions firefoxOptions = new FirefoxOptions();
	    firefoxOptions.addArguments(IntegrationtestsConstants.HEADLESS);
	    firefoxOptions.addPreference(SECURITY_SSL_ENABLE_OCSP_STAPLING, false);
	    myDriver = new FirefoxDriver(firefoxOptions);
	    myDriver.get(appUrl);
		return myDriver;
	}
	 
	@Override
	public void takeScreenshot(
			final String reason,
	    final Integer step,
	   final WebElement element,
	   final String cssSelector
) throws IOException {
		    String origWidth = null;
		    String origColor = null;
		    String origStyle = null;

		    if (!SeleniumTestConstants.NO_CSS_SELECTOR.equals(cssSelector)) {
		      origWidth = element.getCssValue(SeleniumTestConstants.BORDER_WIDTH);
		      origColor = element.getCssValue(SeleniumTestConstants.BORDER_COLOR);
		      origStyle = element.getCssValue(SeleniumTestConstants.BORDER_STYLE);
		      String script = MessageFormat.format(
		    		  SeleniumTestConstants.RESTORE_BORDER_JS,
		          cssSelector, SeleniumTestConstants.NOTE_BORDER_WIDTH, SeleniumTestConstants.NOTE_BORDER_STYLE,
		          SeleniumTestConstants.NOTE_BORDER_COLOR);
		      myDriver.executeScript(script);
		    }
		    final File screenshot = myDriver.getScreenshotAs(OutputType.FILE);
		    final Integer stepNumber = step+1;
		    final File destFile = new File(MessageFormat.format(
		    		SeleniumTestConstants.SSREENSHOT_FILE_NAME,
		        stepNumber.toString()));
		    FileUtils.copyFile(screenshot, destFile);
		    if (!SeleniumTestConstants.NO_CSS_SELECTOR.equals(cssSelector)) {
		    	myDriver.executeScript(MessageFormat.format(
		    		  SeleniumTestConstants.RESTORE_BORDER_JS,
		          cssSelector, origWidth, origStyle, origColor));
		    }
		  }

	@Override
	public void switchToContext(final String context) {
	}
	
}
