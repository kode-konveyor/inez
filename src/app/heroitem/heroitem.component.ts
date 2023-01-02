import { Component, Input } from '@angular/core'
import { Hero } from 'src/types/Hero';
import { IsThisHeroSelectedForEditingService } from '../../com.kodekonveyor.angulartest/services/IsThisHeroSelectedForEditingService';
import { HeroItemComponentModel } from './HeroItemComponentModel';
import { SelectHeroForEditingService } from '../../com.kodekonveyor.angulartest/services/SelectHeroForEditingService';

@Component({
  selector: 'heroitem',
  templateUrl: './heroitem.component.html'
})
export class HeroitemComponent implements HeroItemComponentModel {

  @Input() hero!: Hero;

  isThisHeroSelectedForEditingService: IsThisHeroSelectedForEditingService;
  selectHeroForEditingService: SelectHeroForEditingService;

  constructor(heroItemClassSelectorService: IsThisHeroSelectedForEditingService, heroItemOnClickService: SelectHeroForEditingService) {
    this.isThisHeroSelectedForEditingService = heroItemClassSelectorService;
    this.selectHeroForEditingService = heroItemOnClickService;
  }

  heroitemShownAsSelected(): boolean {
    return this.isThisHeroSelectedForEditingService.run(this)
  }

  heroitemOnClick(): void {
    this.selectHeroForEditingService.run(this);
  }
}


