package com.kodekonveyor.angulartest.backend;

import java.util.Set;

import javax.annotation.Generated;
import javax.persistence.ElementCollection;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@SuperBuilder(toBuilder = true)
@Generated("by zenta-tools")
public class HeroesEntity {
	@ElementCollection
	Set<HeroEntity> heros;

}
