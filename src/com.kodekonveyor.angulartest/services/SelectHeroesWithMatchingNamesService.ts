import { Injectable } from '@angular/core';
import { HeroFilterRepository } from 'src/com.kodekonveyor.angulartest/repositories/HeroFilterRepository';
import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';

@Injectable()
export class SelectHeroesWithMatchingNamesService {
  heroFilterRepository: HeroFilterRepository;

  constructor(heroFilterRepository: HeroFilterRepository) {
    this.heroFilterRepository = heroFilterRepository;
  }

  run(heroes: Heroes): Heroes {
    const filter = this.heroFilterRepository.heroFilter;
    const filtered: Heroes = []
    heroes.forEach(hero => {
      if (hero.name.match(filter.filterString) != null)
        filtered.push(hero)
    });
    return filtered;
  }
}

