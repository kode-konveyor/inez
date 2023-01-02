import { Injectable } from '@angular/core';
import { SelectedHeroRepository } from 'src/com.kodekonveyor.angulartest/repositories/SelectedHeroRepository';
import { HeroItemComponentModel } from '../UI/heroitem/HeroItemComponentModel';

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

