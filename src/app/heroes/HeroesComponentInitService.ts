import { Injectable } from '@angular/core';
import { HeroesRepository } from 'src/services/HeroesRepository';
import { HeroesComponentModel } from './HeroesComponentModel';


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
