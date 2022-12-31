import { Injectable } from '@angular/core';
import { HeroesRepository } from 'src/app/repositories/HeroesRepository';
import { HeroFilterRepository } from 'src/app/repositories/HeroFilterRepository';
import { HeroesComponentModel } from '../app/heroes/HeroesComponentModel';


@Injectable()
export class GetTheActualListOfHeroesService {
  heroesRepository: HeroesRepository;
  heroFilterRepository: HeroFilterRepository;

  run(self: HeroesComponentModel): void {
    self.heroes = this.heroesRepository.heroes;
  }

  constructor(heroesRepository: HeroesRepository, heroFilterRepository: HeroFilterRepository) {
    this.heroesRepository = heroesRepository;
    this.heroFilterRepository = heroFilterRepository;
  }

}
