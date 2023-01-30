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
public class HeroEntitySanitizerTest {

	@Test
	@DisplayName("A simple English name is okay")
	void test() {
		assertEquals(HeroEntityTestData.get().toBuilder().id(null).build(),
				HeroEntitySanitizer.sanitize(HeroEntityTestData.get()));
	}

	@Test
	@DisplayName("The id is null")
	void test2() {
		assertEquals(null,
				HeroEntitySanitizer.sanitize(HeroEntityTestData.get()).id);
	}

	@Test
	@DisplayName("Little Bobby Tables throws ValidationException")
	void test1() {
		ThrowableTester.assertThrows(
				() -> HeroEntitySanitizer
						.sanitize(HeroEntityTestData.getLittleBobbyTables()));
	}
}
