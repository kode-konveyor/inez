package com.kodekonveyor.integrationtests;

import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.platform.commons.annotation.Testable;

import com.kodekonveyor.annotations.TestedBehaviour;
import com.kodekonveyor.annotations.TestedService;
import com.kodekonveyor.authentication.UserEntityTestData;

@TestedBehaviour("roles")
@TestedService("ListLeadController")
@Testable
@Tag("IntegrationTest")
class EndToEndIT {

	private static final String ANGULARTEST_SSL_URI = "https://localhost:1443/angulartest/";

	@Test
	void seleniumTest() throws Exception {
		final SeleniumTestHelper helper = new SeleniumTestHelper();
		login(helper);
		final String resultingText = IntegrationtestsConstants.HERO_NAME
				+ IntegrationtestsConstants.ADDED_TEXT;

		helper
				.lookAtElement(IntegrationtestsConstants.HERO_SELECTOR)
				.checkText("Find your hero.", IntegrationtestsConstants.HERO_NAME)
				.click()
				.lookAtElement(IntegrationtestsConstants.INPUT_SELECTOR)
				.click("Click at the name input at the hero editor")
				.checkText("It is alredy filled in",
						IntegrationtestsConstants.HERO_NAME)
				.enter("Enter some text", IntegrationtestsConstants.ADDED_TEXT)
				.checkText(
						"It is added to the name, of course you can edit it as you like",
						resultingText)
				.lookAtElement(IntegrationtestsConstants.HERO_SELECTOR)
				.checkText("he name of the hero is modified at the list",
						resultingText);
	}

	private void login(final SeleniumTestHelper helper) throws Exception {
		final String user = UserEntityTestData.LOGIN;
		final String pass = UserEntityTestData.PASSWORD;

		helper.goToPage(
				"If you are not logged in, you will be redirected to the login page",
				IntegrationtestsConstants.HTTPS_LOCALHOST_1443_SERVER_MEMBER_LOGIN_NEXT_SERVER_MEMBER_USER)
				.lookAtElement(IntegrationtestsConstants.LOGIN_FIELD)
				.enter("Enter your username", user)
				.lookAtElement(IntegrationtestsConstants.PASSWORD_FIELD)
				.enter("Enter your password", pass)
				.lookAtElement(IntegrationtestsConstants.LOGIN_BUTTON)
				.click("Click on the login button")
				.lookAtElement(IntegrationtestsConstants.FILTER_INPUT_SELECTOR)
				.checkText("You are redirected to the hero page", "");
	}

}
