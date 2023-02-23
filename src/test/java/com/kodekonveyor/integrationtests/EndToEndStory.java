package com.kodekonveyor.integrationtests;

import org.openqa.selenium.Keys;

import com.kodekonveyor.integrationtests.helper.SeleniumTestHelper;
import com.kodekonveyor.integrationtests.helper.TestPlatform;

public class EndToEndStory {

	private static final String LOGIN_PROCESS_NAME = "login";
	private static final String EDITING_HERO_PROCESS_NAME = "Editing Hero";
	private final TestPlatform platform;

	public EndToEndStory(final TestPlatform platform) {
		this.platform = platform;
	}

	private void login(final SeleniumTestHelper helper) throws Exception {
		final String user = UserEntityTestData.LOGIN;
		final String pass = UserEntityTestData.PASSWORD;

		helper
				.enterProcess(LOGIN_PROCESS_NAME)
				.switchToContext(IntegrationtestsConstants.APP_CONTEXT)
				.lookAtElement(IntegrationtestsConstants.LOGIN_BUTTON)
				.click()
				.switchToContext(IntegrationtestsConstants.CHROME_CONTEXT)
				.lookAtElement(IntegrationtestsConstants.LOGIN_FIELD)
				.enter("Enter your username", user)
				.lookAtElement(IntegrationtestsConstants.PASSWORD_FIELD)
				.enter("Enter your password", pass)
				.lookAtElement(IntegrationtestsConstants.AUTH0_LOGIN_BUTTON)
				.click("Click on the login button")
				.switchToContext(IntegrationtestsConstants.APP_CONTEXT)
				.lookAtElement(IntegrationtestsConstants.FILTER_INPUT_SELECTOR)
				.checkText("You are redirected to the hero page", "")
				.exitProcess(LOGIN_PROCESS_NAME);
	}

	public void play() throws Exception {
		final SeleniumTestHelper helper = new SeleniumTestHelper(platform);
		login(helper);
		final String resultingText = IntegrationtestsConstants.HERO_NAME
				+ IntegrationtestsConstants.ADDED_TEXT;

		helper
				.enterProcess(EDITING_HERO_PROCESS_NAME)
				.lookAtElement(IntegrationtestsConstants.HEROES_PLUSBUTTON_SELECTOR)
				.click("click the plus button to add a Hero")
				.lookAtElement(IntegrationtestsConstants.INPUT_SELECTOR)
				.enter("Enter the name of the new hero",
						IntegrationtestsConstants.HERO_NAME)
				.lookAtElement(IntegrationtestsConstants.HEROEDITOR_CREATE_SELECTOR)
				.click("Click the create button")
				.lookAtElementXpath(IntegrationtestsConstants.SUPERMAN_XPATH)
				.checkText("Find your hero.", IntegrationtestsConstants.HERO_NAME)
				.click("click to further edit")
				.lookAtElement(IntegrationtestsConstants.INPUT_SELECTOR)
				.enter("Enter some text and press enter",
						IntegrationtestsConstants.ADDED_TEXT + Keys.RETURN)
				.checkText(
						"It is added to the name, of course you can edit it as you like",
						resultingText)
				.lookAtElementXpath(IntegrationtestsConstants.SUPERMAN_HELLO_XPATH)
				.checkText("he name of the hero is modified at the list",
						resultingText)
				.lookAtElement(IntegrationtestsConstants.LOGOUT_BUTTON)
				.click("Log out")
				.exitProcess(EDITING_HERO_PROCESS_NAME);
	}

}
