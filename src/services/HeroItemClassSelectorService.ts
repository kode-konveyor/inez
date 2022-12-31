import { Injectable } from '@angular/core';
import { SelectedHeroRepository } from 'src/app/repositories/SelectedHeroRepository';
import { HeroItemComponentModel } from '../app/heroitem/HeroItemComponentModel';

@Injectable()
export class HeroItemClassSelectorService {

  selectedHeroRepository: SelectedHeroRepository;

  run(self: HeroItemComponentModel): boolean {
    return self.hero === this.selectedHeroRepository.selectedHero;
  }

  constructor(selectedHeroRepository: SelectedHeroRepository) {
    this.selectedHeroRepository = selectedHeroRepository;
  }

}
