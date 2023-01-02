import { Injectable } from '@angular/core';
import { SelectedHeroRepository } from 'src/com.kodekonveyor.angulartest/repositories/SelectedHeroRepository';
import { HeroItemComponentModel } from '../UI/heroitem/HeroItemComponentModel';

@Injectable()
export class IsThisHeroSelectedForEditingService {

  selectedHeroRepository: SelectedHeroRepository;

  run(self: HeroItemComponentModel): boolean {
    return self.hero === this.selectedHeroRepository.selectedHero;
  }

  constructor(selectedHeroRepository: SelectedHeroRepository) {
    this.selectedHeroRepository = selectedHeroRepository;
  }

}
