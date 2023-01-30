package com.kodekonveyor.angulartest.backend;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kodekonveyor.webapp.UrlMapConstants;

@RestController
public class ListHeroesController {

  @Autowired
  HeroRepository heroRepository;
  
  @Autowired
  Logger logger;

  @GetMapping(path = UrlMapConstants.LIST_HEROES_PATH, produces = MediaType.APPLICATION_JSON_VALUE)
  public HeroesEntity call() {
	  logger.info("list heroes");
    final HeroesEntity heroes = new HeroesEntity();
    for (final HeroEntity hero : heroRepository.findAll())
      heroes.add(hero);

    return heroes;
  }

}
