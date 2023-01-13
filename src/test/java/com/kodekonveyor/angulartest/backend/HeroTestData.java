package com.kodekonveyor.angulartest.backend;

import java.util.List;

public class HeroTestData {

  static HeroEntity get() {
    final HeroEntity hero = new HeroEntity();
    hero.id = Long.valueOf(12);
    hero.name = "joe";
    return hero;
  };

  static List<HeroEntity> list() {
    return List.of(get());
  }
}
