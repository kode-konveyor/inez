package com.kodekonveyor.angulartest.backend;

import static org.mockito.Mockito.mock;

import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.slf4j.Logger;

public class ListHeroesControllerTestBase {

	@InjectMocks
	ListHeroesController listHeroesController;

	@InjectMocks
	Logger logger = mock(Logger.class);

	@Mock
	HeroRepository heroRepository;

	@BeforeEach
	void setUp() {
		HeroRepositoryStubs
				.behaviour(heroRepository);
	}

}
