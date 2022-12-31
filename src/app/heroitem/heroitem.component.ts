import { Component, Input } from '@angular/core'
import { Hero } from 'src/types/Hero';
import { HeroItemClassSelectorService } from '../../services/HeroItemClassSelectorService';
import { HeroItemComponentModel } from './HeroItemComponentModel';
import { HeroItemOnClickService } from '../../services/HeroItemOnClickService';

@Component({
  selector: 'heroitem',
  templateUrl: './heroitem.component.html',
  styleUrls: ['../../assets/app.css']
})
export class HeroItemComponent implements HeroItemComponentModel {

  @Input() hero!: Hero;

  heroItemClassSelectorService: HeroItemClassSelectorService;
  heroItemOnClickService: HeroItemOnClickService;

  constructor(heroItemClassSelectorService: HeroItemClassSelectorService, heroItemOnClickService: HeroItemOnClickService) {
    this.heroItemClassSelectorService = heroItemClassSelectorService;
    this.heroItemOnClickService = heroItemOnClickService;
  }

  heroitemClassSelectedIsActive(): boolean {
    return this.heroItemClassSelectorService.run(this)
  }

  heroitemOnClick(): void {
    this.heroItemOnClickService.run(this);
  }
}


