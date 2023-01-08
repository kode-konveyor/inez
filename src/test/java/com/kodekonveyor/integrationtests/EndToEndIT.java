package com.kodekonveyor.integrationtests;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.platform.commons.annotation.Testable;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.kodekonveyor.annotations.TestedBehaviour;
import com.kodekonveyor.annotations.TestedService;
import com.kodekonveyor.authentication.UserEntityTestData;

@TestedBehaviour("roles")
@TestedService("ListLeadController")
@Testable
@Tag("IntegrationTest")
class EndToEndIT {

  @Test
  void seleniumTest() {
    final String user = UserEntityTestData.LOGIN;
    final String pass = UserEntityTestData.PASSWORD;
    final WebDriver driver = SeleniumTestHelper.getDriver();
    driver.get(
        IntegrationtestsConstants.HTTPS_LOCALHOST_1443_SERVER_MEMBER_LOGIN_NEXT_SERVER_MEMBER_USER
    );
    final WebElement githubLoginButton =
        SeleniumTestHelper
            .waitFor(IntegrationtestsConstants.AUTH0_LOCK_SOCIAL_BUTTON_TEXT);
    githubLoginButton.click();
    final WebElement loginField =
        SeleniumTestHelper.waitFor(IntegrationtestsConstants.LOGIN_FIELD);
    loginField.sendKeys(user);
    final WebElement passwordField =
        SeleniumTestHelper.waitFor(IntegrationtestsConstants.PASSWORD_FIELD);
    passwordField.sendKeys(pass);
    final WebElement loginButton =
        SeleniumTestHelper.waitFor(IntegrationtestsConstants.LOGIN_BUTTON);
    loginButton.click();
    final WebElement name =
        SeleniumTestHelper.waitFor(IntegrationtestsConstants.OBJECT_BOX_STRING);
    final String myName = name.getText();
    assertEquals(
        String.format(IntegrationtestsConstants.QUOTED_FORMAT, user), myName
    );
  }

}
