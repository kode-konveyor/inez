package com.kodekonveyor.angulartest.backend;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.MediaType;

public class ListHeroesController {

  @Autowired
  HeroRepository heroRepository;

  @GetMapping(path = "/heroes", produces = MediaType.APPLICATION_JSON_VALUE)

  public List<HeroEntity> call() {
    final List<HeroEntity> heroes = new ArrayList<HeroEntity>();
    for (final HeroEntity hero : heroRepository.findAll())
      heroes.add(hero);
    return heroes;
  }

}
