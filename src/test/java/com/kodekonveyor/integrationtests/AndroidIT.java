package com.kodekonveyor.integrationtests;

import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.platform.commons.annotation.Testable;

import com.kodekonveyor.annotations.TestedBehaviour;
import com.kodekonveyor.annotations.TestedService;
import com.kodekonveyor.integrationtests.helper.AndroidTestPlatform;

@TestedBehaviour("android")
@TestedService("ALL")
@Testable
@Tag("IntegrationTest")
public class AndroidIT {
	
	@Test
	void test() throws Exception {
		AndroidTestPlatform platform = new AndroidTestPlatform();
		EndToEndStory story = new EndToEndStory(platform);
		story.play();
	}
}
