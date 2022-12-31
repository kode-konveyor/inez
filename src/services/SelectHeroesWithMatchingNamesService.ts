import { Injectable } from '@angular/core';
import { HeroesRepository } from 'src/app/repositories/HeroesRepository';
import { HeroFilterRepository } from 'src/app/repositories/HeroFilterRepository';
import { Heroes } from 'src/types/Heroes';

@Injectable()
export class SelectHeroesWithMatchingNamesService {
    heroesRepository: HeroesRepository;
    heroFilterRepository: HeroFilterRepository;

    constructor(heroesRepository: HeroesRepository, heroFilterRepository: HeroFilterRepository) {
        this.heroesRepository = heroesRepository;
        this.heroFilterRepository = heroFilterRepository;
    }

    run(): Heroes {
        const filter = this.heroFilterRepository.heroFilter;
        const heroes: Heroes = []
        this.heroesRepository.heroes.forEach(hero => {
            if (hero.name.match(filter.filterString) != null)
                heroes.push(hero)
        });
        return heroes;
    }
}

