package com.kodekonveyor.integrationtests.helper;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.kodekonveyor.annotations.InterfaceClass;

@InterfaceClass
public interface TestPlatform {
	
	WebDriver makeDriver() throws IOException;
	
	void takeScreenshot(
		 String reason,
	     Integer step,
	     WebElement element,
	     String cssSelector
    ) throws IOException;
	
	void switchToContext( String context) throws InterruptedException;
}
