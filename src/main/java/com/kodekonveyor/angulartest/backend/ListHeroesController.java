package com.kodekonveyor.angulartest.backend;

import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kodekonveyor.webapp.UrlMapConstants;

@RestController
public class ListHeroesController {

	@Autowired
	HeroRepository heroRepository;

	@GetMapping(path = UrlMapConstants.LIST_HEROES_PATH, produces = MediaType.APPLICATION_JSON_VALUE)
	public HeroesEntity call() {
		final HeroesEntity heroes = HeroesEntity.builder()
				.heros(new HashSet<HeroEntity>()).build();
		for (final HeroEntity hero : heroRepository.findAll())
			heroes.heros.add(hero);
		return heroes;
	}

}
