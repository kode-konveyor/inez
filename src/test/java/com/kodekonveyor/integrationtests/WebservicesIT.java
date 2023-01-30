package com.kodekonveyor.integrationtests;

import java.io.IOException;
import java.net.URL;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.platform.commons.annotation.Testable;
import org.springframework.beans.factory.annotation.Autowired;

import com.kodekonveyor.angulartest.backend.HeroEntity;
import com.kodekonveyor.angulartest.backend.HeroRepository;
import com.kodekonveyor.annotations.TestedBehaviour;
import com.kodekonveyor.annotations.TestedService;
import com.kodekonveyor.exception.ThrowableTester;
import com.kodekonveyor.webapp.UrlMapConstants;

import net.minidev.json.parser.ParseException;

@TestedBehaviour("roles")
@TestedService("ListLeadController")
@Testable
@Tag("IntegrationTest")
public class WebservicesIT {

	@Autowired
	HeroRepository heroRepository;

	String serverURI = IntegrationtestsConstants.LOCAL_SERVER_URI;

	@BeforeEach
	void setUp() {
	}

	@Test
	@DisplayName("The addHero endpoint is protected")
	void test2() throws IOException, ParseException {
		final HeroEntity addedHero = HeroEntityTestData.get();
		ThrowableTester.assertThrows(() -> {
			WebServiceTestHelper.httpPost(
					new URL(serverURI
							+ UrlMapConstants.ADD_HERO_PATH),
					addedHero,
					HeroEntity.class);
		})
				.assertMessageContains("Server returned HTTP response code: 403");
	}

	@Test
	@DisplayName("The listHeroes endpoint is protected")
	void test3() throws IOException, ParseException {
		ThrowableTester.assertThrows(() -> {
			WebServiceTestHelper.httpGet(
					new URL(serverURI
							+ UrlMapConstants.LIST_HEROES_PATH),
					HeroEntity.class);
		})
				.assertMessageContains("Server returned HTTP response code: 401");
	}

}
