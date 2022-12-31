import { Injectable } from '@angular/core';
import { HeroFilterRepository } from 'src/app/repositories/HeroFilterRepository';
import { HeroFilter } from 'src/types/HeroFilter';

@Injectable()
export class setHeroFilterService {
    heroFilterRepository: HeroFilterRepository;

    run(filter: HeroFilter): void {
        this.heroFilterRepository.set(filter);
    }

    constructor(heroFilterRepository: HeroFilterRepository) {
        this.heroFilterRepository = heroFilterRepository;
    }
}
