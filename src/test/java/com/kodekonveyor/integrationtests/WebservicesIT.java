package com.kodekonveyor.integrationtests;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.io.IOException;
import java.net.URL;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.platform.commons.annotation.Testable;

import com.kodekonveyor.angulartest.backend.HeroDTO;
import com.kodekonveyor.angulartest.backend.HeroEntity;
import com.kodekonveyor.angulartest.backend.HeroTestData;
import com.kodekonveyor.annotations.TestedBehaviour;
import com.kodekonveyor.annotations.TestedService;
import com.kodekonveyor.authentication.UserDTO;
import com.kodekonveyor.authentication.UserEntityTestData;
import com.kodekonveyor.webapp.UrlMapConstants;

import net.minidev.json.parser.ParseException;

@TestedBehaviour("roles")
@TestedService("ListLeadController")
@Testable
@Tag("IntegrationTest")
class WebservicesIT {


  @Test
  @DisplayName("A user can get its data at member/user")
  void test1() throws IOException, ParseException {
  	final UserDTO marketUser = (UserDTO) WebServiceTestHelper.httpGet(
    		new URL(IntegrationtestsConstants.LOCAL_SERVER_URI + UrlMapConstants.SHOW_USER_PATH),
    		UserEntityTestData.LOGIN,
    		UserDTO.class);
    assertEquals(UserEntityTestData.LOGIN, marketUser.getLogin());
  }

  @Test
  @DisplayName("A user can add a Hero")
  void test2() throws IOException, ParseException {
  	final HeroDTO addedHero =  HeroTestData.get();
		final HeroEntity reply = (HeroEntity) WebServiceTestHelper.httpPost(
    		new URL(IntegrationtestsConstants.LOCAL_SERVER_URI + UrlMapConstants.ADD_HERO_PATH),
    		UserEntityTestData.LOGIN,
    		addedHero,
    		HeroEntity.class);
    assertEquals(addedHero.getName(), reply.getName());
  }

  @Test
  @DisplayName("The id of the added Hero will be changed")
  void test3() throws IOException, ParseException {
  	final HeroDTO addedHero = HeroTestData.get();
		final HeroEntity reply = (HeroEntity) WebServiceTestHelper.httpPost(
    		new URL(IntegrationtestsConstants.LOCAL_SERVER_URI + UrlMapConstants.ADD_HERO_PATH),
    		UserEntityTestData.LOGIN,
    		addedHero,
    		HeroEntity.class);
    assertNotEquals(addedHero.getId(), reply.getId());
  }


}
