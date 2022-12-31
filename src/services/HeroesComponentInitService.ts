import { Injectable } from '@angular/core';
import { HeroesRepository } from 'src/app/repositories/HeroesRepository';
import { HeroesComponentModel } from '../app/heroes/HeroesComponentModel';


@Injectable()
export class HeroesComponentInitService {
  heroesRepository: HeroesRepository;

  heroesComponentInitService(self: HeroesComponentModel): void {
    self.heroes = this.heroesRepository.heroes;
  }

  constructor(heroesRepository: HeroesRepository) {
    this.heroesRepository = heroesRepository;
  }
}
