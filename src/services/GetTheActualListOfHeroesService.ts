import { Injectable } from '@angular/core';
import { HeroesRepository } from 'src/app/repositories/HeroesRepository';
import { HeroFilterRepository } from 'src/app/repositories/HeroFilterRepository';
import { HeroesComponentModel } from '../app/heroes/HeroesComponentModel';
import { obtainHeroesService } from './ObtainHeroesService';


@Injectable()
export class GetTheActualListOfHeroesService {
  heroesRepository: HeroesRepository;

  run(): void {
    Array.prototype.push.apply(
      this.heroesRepository.heroes, obtainHeroesService());
  }

  constructor(heroesRepository: HeroesRepository) {
    this.heroesRepository = heroesRepository;
  }

}
