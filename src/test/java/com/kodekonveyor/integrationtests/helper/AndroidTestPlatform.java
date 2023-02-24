package com.kodekonveyor.integrationtests.helper;

import static org.assertj.core.api.Assertions.fail;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.kodekonveyor.annotations.InterfaceClass;

import io.appium.java_client.android.AndroidDriver;
import lombok.Getter;

@InterfaceClass
public class AndroidTestPlatform implements TestPlatform {

	private static final String UIAUTOMATOR2_SERVER_INSTALL_TIMEOUT = "uiautomator2ServerInstallTimeout";
	private static final String UI_AUTOMATOR2 = "UiAutomator2";
	private static final String AUTOMATION_NAME = "automationName";
	private static final String ADB_EXEC_TIMEOUT = "adbExecTimeout";
	private static final String AUTO_WEBVIEW_TIMEOUT = "autoWebviewTimeout";
	private static final String AVD_READY_TIMEOUT = "avdReadyTimeout";
	private static final String AVD_LAUNCH_TIMEOUT = "avdLaunchTimeout";
	private static final String ANDROID_INSTALL_TIMEOUT = "androidInstallTimeout";
	private static final String ANDROID_DEVICE_READY_TIMEOUT = "androidDeviceReadyTimeout";
	private static final String DEVICE_READY_TIMEOUT = "deviceReadyTimeout";
	private static final String APP_WAIT_DURATION = "appWaitDuration";
	private static final String NEW_COMMAND_TIMEOUT = "newCommandTimeout";
	private static final int TIMEOUT_IN_MILLISEC = 60000;
	private static final int TIMEOUT_IN_SEC = 60;
	private static final int CONTEXT_SWITCH_TRY_DELAY = 10;
	private static final int CONTEXT_SWITCH_MAX_TRIES = 3;
	private static final String APPIUM_SERVER_URL = "http://127.0.0.1:4723/wd/hub";
	private static final String EXTRACT_CHROME_ANDROID_PACKAGE_FROM_CONTEXT_NAME = "extractChromeAndroidPackageFromContextName";
	private static final String ACTIVITY_NAME = "com.kodekonveyor.angulartest.MainActivity";
	private static final String APP_ACTIVITY = "appActivity";
	private static final String APP_PACKAGE_NAME = "com.kodekonveyor.angulartest";
	private static final String APP_PACKAGE = "appPackage";
	private static final String APK_PATH = "target/app-debug.apk";
	private static final String APP = "app";
	private static final String ANDROID = "Android";
	private static final String PLATFORM_NAME = "platformName";
	private static final String COULD_NOT_WAIT_FOR_CONTEXT = "could not wait for context ";

	@Getter
	private AndroidDriver driver;
	@Getter
	private final String docDir;

	public AndroidTestPlatform(final String docDir) {
		this.docDir = docDir;
	}

	@Override
	public WebDriver makeDriver() throws MalformedURLException {
		final DesiredCapabilities caps = new DesiredCapabilities();
		caps.setCapability(AUTOMATION_NAME, UI_AUTOMATOR2);
		caps.setCapability(PLATFORM_NAME, ANDROID);
		caps.setCapability(APP, APK_PATH);
		caps.setCapability(APP_PACKAGE, APP_PACKAGE_NAME);
		caps.setCapability(APP_ACTIVITY,
				ACTIVITY_NAME);
		caps.setCapability(EXTRACT_CHROME_ANDROID_PACKAGE_FROM_CONTEXT_NAME, true);
		caps.setCapability(NEW_COMMAND_TIMEOUT, TIMEOUT_IN_SEC);
		caps.setCapability(APP_WAIT_DURATION, TIMEOUT_IN_MILLISEC);
		caps.setCapability(DEVICE_READY_TIMEOUT, TIMEOUT_IN_SEC);
		caps.setCapability(ANDROID_DEVICE_READY_TIMEOUT, TIMEOUT_IN_SEC);
		caps.setCapability(ANDROID_INSTALL_TIMEOUT, TIMEOUT_IN_MILLISEC);
		caps.setCapability(AVD_LAUNCH_TIMEOUT, TIMEOUT_IN_MILLISEC);
		caps.setCapability(AVD_READY_TIMEOUT, TIMEOUT_IN_MILLISEC);
		caps.setCapability(AUTO_WEBVIEW_TIMEOUT, TIMEOUT_IN_MILLISEC);
		caps.setCapability(ADB_EXEC_TIMEOUT, TIMEOUT_IN_MILLISEC);
		caps.setCapability(UIAUTOMATOR2_SERVER_INSTALL_TIMEOUT, TIMEOUT_IN_MILLISEC);
		driver = new AndroidDriver(new URL(APPIUM_SERVER_URL), caps);
		return driver;
	}

	@Override
	public void switchToContext(final String appContext)
			throws InterruptedException {
		int tries = 0;
		while (true) {
			if (tries > CONTEXT_SWITCH_MAX_TRIES) {
				fail(COULD_NOT_WAIT_FOR_CONTEXT + appContext);
			}
			final Set<String> contextNames = driver.getContextHandles();
			if (contextNames.contains(appContext)) {
				break;
			}
			TimeUnit.SECONDS.sleep(CONTEXT_SWITCH_TRY_DELAY);
			tries++;
		}
		driver.context(appContext);
	}

}
