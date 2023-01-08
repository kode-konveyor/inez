package com.kodekonveyor.angulartest.backend;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

public class ListHeroesController {

  @Autowired
  HeroRepository heroRepository;

  public List<Hero> call() {
    final List<Hero> heroes = new ArrayList<Hero>();
    for (final Hero hero : heroRepository.findAll())
      heroes.add(hero);
    return heroes;
  }

}
