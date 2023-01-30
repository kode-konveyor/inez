package com.kodekonveyor.angulartest.backend;

import static org.mockito.Mockito.doReturn;

import com.kodekonveyor.integrationtests.HeroEntityTestData;

public class HeroRepositoryStubs {

	public static void behaviour(final HeroRepository heroRepository) {
		doReturn(HeroEntityTestData.list())
				.when(heroRepository).findAll();
	}

}
