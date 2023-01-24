package com.kodekonveyor.integrationtests;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.IOException;
import java.net.URL;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.platform.commons.annotation.Testable;
import org.springframework.beans.factory.annotation.Autowired;

import com.kodekonveyor.angulartest.backend.HeroEntity;
import com.kodekonveyor.angulartest.backend.HeroRepository;
import com.kodekonveyor.angulartest.backend.HeroesEntity;
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

  @Autowired
  HeroRepository heroRepository;

  String serverURI = IntegrationtestsConstants.LOCAL_SERVER_URI;

  @BeforeEach
  void setUp() {
  }

  @Test
  @DisplayName("A user can get its data at member/user")
  void test1() throws IOException, ParseException {
    final UserDTO marketUser = (UserDTO) WebServiceTestHelper.httpGet(
        new URL(serverURI
            + UrlMapConstants.SHOW_USER_PATH),
        UserEntityTestData.LOGIN,
        UserDTO.class);
    assertEquals(UserEntityTestData.LOGIN, marketUser.getLogin());
  }

  @Test
  @DisplayName("A user can add a Hero")
  void test2() throws IOException, ParseException {
    final HeroEntity addedHero = HeroEntityTestData.get();
    final HeroEntity reply = (HeroEntity) WebServiceTestHelper.httpPost(
        new URL(serverURI
            + UrlMapConstants.ADD_HERO_PATH),
        UserEntityTestData.LOGIN,
        addedHero,
        HeroEntity.class);
    assertEquals(addedHero.getName(), reply.getName());
  }

  @Test
  @DisplayName("The id of the added Hero will be changed")
  void test3() throws IOException, ParseException {
    final HeroEntity addedHero = HeroEntityTestData.get();
    final HeroEntity reply = (HeroEntity) WebServiceTestHelper.httpPost(
        new URL(serverURI
            + UrlMapConstants.ADD_HERO_PATH),
        UserEntityTestData.LOGIN,
        addedHero,
        HeroEntity.class);
    assertNotEquals(addedHero.getId(), reply.getId());
  }

  @Test
  @DisplayName("The id of the added Hero is not null")
  void test5() throws IOException, ParseException {
    final HeroEntity addedHero = HeroEntityTestData.get();
    final HeroEntity reply = (HeroEntity) WebServiceTestHelper.httpPost(
        new URL(serverURI
            + UrlMapConstants.ADD_HERO_PATH),
        UserEntityTestData.LOGIN,
        addedHero,
        HeroEntity.class);
    assertNotEquals(null, reply.getId());
  }

  @Test
  @DisplayName("A user can list heroes")
  void test4() throws IOException, ParseException {
    final HeroesEntity reply = (HeroesEntity) WebServiceTestHelper.httpGet(
        new URL(serverURI
            + UrlMapConstants.LIST_HEROES_PATH),
        UserEntityTestData.LOGIN,
        HeroesEntity.class);
     HeroEntity elementFound = reply.stream().reduce((result,element) -> {
    	if(element.name.equals(HeroEntityTestData.get().name))
    		return element;
    	return result    ;				
    }).get();
     assertEquals(elementFound.name, HeroEntityTestData.get().name);
  }

}
