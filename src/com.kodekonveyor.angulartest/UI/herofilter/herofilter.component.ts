import { Component, Input } from '@angular/core'
import { HeroFilterRepository } from '../../repositories/HeroFilterRepository';
import { HeroFilterComponentModel } from './HeroFilterComponentModel';

@Component({
  selector: 'herofilter',
  templateUrl: './herofilter.component.html'
})
export class HeroFilterComponent implements HeroFilterComponentModel {

  heroFilterRepository: HeroFilterRepository;
  @Input() id!: string;

  constructor(heroFilterRepository: HeroFilterRepository,) {
    this.heroFilterRepository = heroFilterRepository;
  }

}


