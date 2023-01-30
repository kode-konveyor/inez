package com.kodekonveyor.angulartest.backend;

public class HeroEntitySanitizer {

	public static HeroEntity sanitize(final HeroEntity heroEntity) {
		final HeroEntity sanitized = new HeroEntity();
		sanitized.id = null;
		sanitized.name = NameSanitizer.sanitize(heroEntity.name);
		return sanitized;
	}
}
