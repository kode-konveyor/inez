package com.kodekonveyor.angulartest.backend;

import org.mockito.InjectMocks;
import org.mockito.Mock;

public class ListHeroesControllerTestBase {

  @InjectMocks
  ListHeroesController listHeroesController;
  @Mock
  HeroRepository heroRepository;

  void setUp() {
    HeroRepositoryStubs
        .behaviour(heroRepository);
  }

}
