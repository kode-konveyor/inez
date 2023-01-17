package com.kodekonveyor.integrationtests;

import java.util.List;

import com.kodekonveyor.angulartest.backend.HeroDTOTestData;
import com.kodekonveyor.angulartest.backend.HeroEntity;

public class HeroEntityTestData {

	public static final HeroEntity get() {
		final HeroEntity newEntity = new HeroEntity();
		newEntity.id = HeroDTOTestData.HERO_ID;
		newEntity.name = HeroDTOTestData.HERO_NAME;
		return newEntity;
	}

	public static final List<HeroEntity> list() {
		return List.of(get());
	}

}
