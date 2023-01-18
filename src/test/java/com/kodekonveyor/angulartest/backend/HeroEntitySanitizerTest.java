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
class HeroEntitySanitizerTest {

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
