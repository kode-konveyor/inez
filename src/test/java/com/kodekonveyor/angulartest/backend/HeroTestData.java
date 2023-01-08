package com.kodekonveyor.angulartest.backend;

import java.util.List;

public class HeroTestData {

  static Hero get() {
    final Hero hero = new Hero();
    hero.id = "12";
    hero.name = "joe";
    return hero;
  };

  static List<Hero> list() {
    return List.of(get());
  }
}
