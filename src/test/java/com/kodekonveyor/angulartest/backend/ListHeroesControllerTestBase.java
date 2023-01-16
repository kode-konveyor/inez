package com.kodekonveyor.angulartest.backend;

import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;

public class ListHeroesControllerTestBase {

  @InjectMocks
  ListHeroesController listHeroesController;
  @Mock
  HeroRepository heroRepository;

  @BeforeEach
  void setUp() {
    HeroRepositoryStubs
        .behaviour(heroRepository);
  }

}
