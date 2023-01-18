package com.kodekonveyor.angulartest.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import com.kodekonveyor.annotations.TestedBehaviour;
import com.kodekonveyor.annotations.TestedService;
import com.kodekonveyor.exception.ThrowableTester;
import com.kodekonveyor.integrationtests.HeroEntityTestData;

@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
@RunWith(MockitoJUnitRunner.class)
@TestedBehaviour("Data access")
@TestedService("Name Sanitizer")
class NameSanitizerTest {

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
