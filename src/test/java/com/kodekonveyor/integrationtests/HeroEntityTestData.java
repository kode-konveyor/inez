package com.kodekonveyor.integrationtests;

import java.util.List;

import com.kodekonveyor.angulartest.backend.HeroEntity;

public class HeroEntityTestData {

	public static final Long HERO_ID = 42L;
	public static final String HERO_NAME = "John Doe";
	public static final Long LITTLE_BOBBY_TABLES_ID = 43L;
	public static final String LITTLE_BOBBY_TABLES = "Robert');DROP TABLE Students;--";
	public static final Long CHI_ID = 43L;
	public static final String CHI_NAME = "維尼熊";

	public static final HeroEntity get() {
		final HeroEntity newEntity = new HeroEntity();
		newEntity.id = HERO_ID;
		newEntity.name = HERO_NAME;
		return newEntity;
	}

	public static final HeroEntity getLittleBobbyTables() {
		final HeroEntity newEntity = get();
		newEntity.id = LITTLE_BOBBY_TABLES_ID;
		newEntity.name = LITTLE_BOBBY_TABLES;
		return newEntity;
	}

	public static final HeroEntity getXiChinPing() {
		final HeroEntity newEntity = get();
		newEntity.id = CHI_ID;
		newEntity.name = CHI_NAME;
		return newEntity;
	}

	public static final List<HeroEntity> list() {
		return List.of(get());
	}

}
