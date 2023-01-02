import { Component } from '@angular/core'
import { HeroFilterRepository } from '../../repositories/HeroFilterRepository';
import { HeroFilterComponentModel } from './HeroFilterComponentModel';

@Component({
  selector: 'herofilter',
  templateUrl: './herofilter.component.html'
})
export class HeroFilterComponent implements HeroFilterComponentModel {

  heroFilterRepository: HeroFilterRepository;

  constructor(heroFilterRepository: HeroFilterRepository,) {
    this.heroFilterRepository = heroFilterRepository;
  }

}


