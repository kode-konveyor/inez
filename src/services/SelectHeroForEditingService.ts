import { Injectable } from '@angular/core';
import { SelectedHeroRepository } from 'src/app/repositories/SelectedHeroRepository';
import { HeroItemComponentModel } from '../app/heroitem/HeroItemComponentModel';

@Injectable()
export class SelectHeroForEditingService {

  selectedHeroRepository: SelectedHeroRepository;

  constructor(selectedHeroRepository: SelectedHeroRepository) {
    this.selectedHeroRepository = selectedHeroRepository;
  }

  run(self: HeroItemComponentModel): void {
    this.selectedHeroRepository.selectedHero = self.hero;
  }
}

