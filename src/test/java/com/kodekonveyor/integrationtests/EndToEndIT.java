package com.kodekonveyor.integrationtests;

import java.text.MessageFormat;

import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.platform.commons.annotation.Testable;
import org.openqa.selenium.Keys;

import com.kodekonveyor.annotations.TestedBehaviour;
import com.kodekonveyor.annotations.TestedService;

@TestedBehaviour("roles")
@TestedService("ListLeadController")
@Testable
@Tag("IntegrationTest")
public class EndToEndIT {

	@Test
	void seleniumTest() throws Exception {
		SeleniumTestHelper helper = new SeleniumTestHelper();
		login(helper);
		final String resultingText = IntegrationtestsConstants.HERO_NAME
				+ IntegrationtestsConstants.ADDED_TEXT;

		helper = helper
				.lookAtElement(IntegrationtestsConstants.HEROES_PLUSBUTTON_SELECTOR)
				.click("click the plus button to add a Hero")
				.lookAtElement(IntegrationtestsConstants.INPUT_SELECTOR)
				.enter("Enter the name of the new hero",
						IntegrationtestsConstants.HERO_NAME)
				.lookAtElement(IntegrationtestsConstants.HEROEDITOR_CREATE_SELECTOR)
				.click("Click the create button")
				.lookAtElement("#heroes-heroeditor-id");
		String newId = helper
				.getText("The hero got saved into the database, and have an ID");

		String newHeroSelector = MessageFormat
				.format(IntegrationtestsConstants.HEROITEM_SELECTOR_TEMPLATE, newId);
		helper
				.lookAtElement(newHeroSelector)
				.checkText("Find your hero.", IntegrationtestsConstants.HERO_NAME)
				.lookAtElement(IntegrationtestsConstants.INPUT_SELECTOR)
				.enter("Enter some text and press enter",
						IntegrationtestsConstants.ADDED_TEXT + Keys.RETURN)
				.checkText(
						"It is added to the name, of course you can edit it as you like",
						resultingText)
				.lookAtElement(newHeroSelector)
				.checkText("he name of the hero is modified at the list",
						resultingText);
	}

	private void login(final SeleniumTestHelper helper) throws Exception {
		final String user = UserEntityTestData.LOGIN;
		final String pass = UserEntityTestData.PASSWORD;

		helper.goToPage(
				"If you are not logged in, you will be redirected to the login page",
				IntegrationtestsConstants.APP_URL)
				.lookAtElement(IntegrationtestsConstants.LOGIN_BUTTON)
				.click()
				.lookAtElement(IntegrationtestsConstants.LOGIN_FIELD)
				.enter("Enter your username", user)
				.lookAtElement(IntegrationtestsConstants.PASSWORD_FIELD)
				.enter("Enter your password", pass)
				.lookAtElement(IntegrationtestsConstants.AUTH0_LOGIN_BUTTON)
				.click("Click on the login button")
				.lookAtElement(IntegrationtestsConstants.FILTER_INPUT_SELECTOR)
				.checkText("You are redirected to the hero page", "");
	}

}
