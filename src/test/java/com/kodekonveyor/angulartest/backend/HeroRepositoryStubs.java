package com.kodekonveyor.angulartest.backend;

import static org.mockito.Mockito.doReturn;

public class HeroRepositoryStubs {

  public static void behaviour(final HeroRepository heroRepository) {
    doReturn(HeroTestData.list())
        .when(heroRepository).findAll();
  }

}
