package com.kodekonveyor.angulartest.backend;

import java.util.List;

public class HeroTestData {

  public static final String HERO_NAME = "joe";
  public static final int HERO_ID = 12;

	public static final HeroEntity get() {
    final HeroEntity hero = new HeroEntity();
    hero.id = Long.valueOf(HERO_ID);
    hero.name = HERO_NAME;
    return hero;
  }

  public static final List<HeroEntity> list() {
    return List.of(get());
  }
}
