package com.kodekonveyor.angulartest.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kodekonveyor.webapp.UrlMapConstants;

@RestController
public class AddHeroController {

	@Autowired
	  HeroRepository heroRepository;

	  @PostMapping(path = UrlMapConstants.ADD_HERO_PATH, produces = MediaType.APPLICATION_JSON_VALUE)
	  public HeroEntity call(final @RequestBody HeroDTO heroToAdd) {
	  	final HeroEntity addedHero = HeroEntity.builder().name(heroToAdd.name).build();
	    heroRepository.save(addedHero);
	    return addedHero;
	  }

}
