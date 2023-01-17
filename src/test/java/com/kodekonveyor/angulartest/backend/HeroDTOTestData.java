package com.kodekonveyor.angulartest.backend;

import java.util.List;

public class HeroDTOTestData {

	public static final String HERO_NAME = "joe";
	public static final long HERO_ID = 12L;

	public static final HeroDTO get() {
		final HeroDTO newEntity = new HeroDTO();
		newEntity.id = HERO_ID;
		newEntity.name = HERO_NAME;
		return newEntity;
	}

	public static final List<HeroDTO> list() {
		return List.of(get());
	}
}
