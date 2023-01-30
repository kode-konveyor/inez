package com.kodekonveyor.angulartest.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import com.kodekonveyor.annotations.TestedBehaviour;
import com.kodekonveyor.annotations.TestedService;
import com.kodekonveyor.exception.ThrowableTester;
import com.kodekonveyor.integrationtests.HeroEntityTestData;

@TestedBehaviour("Data access")
@TestedService("Name Sanitizer")
public class NameSanitizerTest {

	@Test
	@DisplayName("A simple English name is okay")
	void test() {
		assertEquals(HeroEntityTestData.HERO_NAME,
				NameSanitizer.sanitize(HeroEntityTestData.HERO_NAME));
	}

	@Test
	@DisplayName("A chinese Winnie The Pooh is okay")
	void test2() {
		assertEquals(HeroEntityTestData.CHI_NAME,
				NameSanitizer.sanitize(HeroEntityTestData.CHI_NAME));
	}

	@Test
	@DisplayName("Little Bobby Tables throws ValidationException")
	void test1() {
		ThrowableTester.assertThrows(
				() -> NameSanitizer.sanitize(HeroEntityTestData.LITTLE_BOBBY_TABLES));
	}
}
