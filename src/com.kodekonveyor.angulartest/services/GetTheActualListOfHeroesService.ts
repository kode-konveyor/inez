import { Injectable } from '@angular/core';
import { HeroesRepository } from 'src/com.kodekonveyor.angulartest/repositories/HeroesRepository';
import { obtainHeroesService } from '../../legacy/ObtainHeroesService';


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
