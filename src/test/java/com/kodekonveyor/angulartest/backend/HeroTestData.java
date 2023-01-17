package com.kodekonveyor.angulartest.backend;

import java.util.List;

public class HeroTestData {

  public static final String HERO_NAME = "joe";
  public static final int HERO_ID = 12;

	public static final HeroEntity get() {
    return HeroEntity.builder()
    		.id((long) HERO_ID)
    		.name(HERO_NAME)
    		.build();
  }

  public static final List<HeroEntity> list() {
    return List.of(get());
  }
}
