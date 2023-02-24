package com.kodekonveyor.integrationtests;

import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.platform.commons.annotation.Testable;

import com.kodekonveyor.annotations.TestedBehaviour;
import com.kodekonveyor.annotations.TestedService;
import com.kodekonveyor.integrationtests.helper.FirefoxTestPlatform;

@TestedBehaviour("android")
@TestedService("ALL")
@Testable
@Tag("IntegrationTest")
public class FirefoxIT {

	@Test
	void test() throws Exception {
		final FirefoxTestPlatform platform = new FirefoxTestPlatform(
				IntegrationtestsConstants.APP_URL,
				"web");
		final EndToEndStory story = new EndToEndStory(platform);
		story.play();
	}
}
