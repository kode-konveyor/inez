package com.kodekonveyor.angulartest.backend;

import org.springframework.data.repository.CrudRepository;

public interface HeroRepository extends CrudRepository<HeroEntity, Long> {
}
