package com.kodekonveyor.integrationtests;

import java.io.IOException;

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

	private static final String ANGULARTEST_SSL_URI = "https://localhost:1443/angulartest";

	@Test
	void seleniumTest() throws IOException {
		final SeleniumTestHelper helper = new SeleniumTestHelper();
		login(helper);
		final String resultingText = IntegrationtestsConstants.HERO_NAME 
				+ IntegrationtestsConstants.ADDED_TEXT;

		helper.goToPage(ANGULARTEST_SSL_URI)
				.lookAtElement(IntegrationtestsConstants.HERO_SELECTOR)
				.checkText(IntegrationtestsConstants.HERO_NAME)
				.click()
				.lookAtElement(IntegrationtestsConstants.INPUT_SELECTOR).click()
				.checkText(IntegrationtestsConstants.HERO_NAME)
				.enter(IntegrationtestsConstants.ADDED_TEXT)
				.checkText(resultingText)
				.lookAtElement(IntegrationtestsConstants.HERO_SELECTOR)
				.checkText(resultingText);
	}

	private void login(final SeleniumTestHelper helper) throws IOException {
		final String user = UserEntityTestData.LOGIN;
		final String pass = UserEntityTestData.PASSWORD;

		helper.goToPage(
				IntegrationtestsConstants.HTTPS_LOCALHOST_1443_SERVER_MEMBER_LOGIN_NEXT_SERVER_MEMBER_USER)
				.lookAtElement(
						IntegrationtestsConstants.AUTH0_LOCK_SOCIAL_BUTTON_TEXT)
				.click()
				.lookAtElement(IntegrationtestsConstants.LOGIN_FIELD)
				.enter(user)
				.lookAtElement(IntegrationtestsConstants.PASSWORD_FIELD)
				.enter(pass)
				.lookAtElement(IntegrationtestsConstants.LOGIN_BUTTON).click()
				.lookAtElement(IntegrationtestsConstants.OBJECT_BOX_STRING)
				.checkText(String
						.format(IntegrationtestsConstants.QUOTED_FORMAT, user));
	}

}
