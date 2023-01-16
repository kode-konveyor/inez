package com.kodekonveyor.angulartest.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AddHeroController {

	@Autowired
	  HeroRepository heroRepository;

	  @PostMapping(path = "/hero/add/{name}", produces = MediaType.APPLICATION_JSON_VALUE)
	  public HeroEntity call(final @RequestBody String name) {
	    HeroEntity addedHero = new HeroEntity();
	    addedHero.name = name;
	    heroRepository.save(addedHero);
	    return addedHero;
	  }

}
