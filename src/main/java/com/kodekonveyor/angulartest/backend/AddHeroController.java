package com.kodekonveyor.angulartest.backend;

import java.io.IOException;

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
	public HeroEntity call(final @RequestBody HeroEntity heroToAdd)
			throws IOException {
		HeroEntity addedHero = new HeroEntity();
		addedHero.name = heroToAdd.name;
//		throw new IOException("added:" + addedHero);
		addedHero = heroRepository.save(addedHero);
		return addedHero;
	}

}
