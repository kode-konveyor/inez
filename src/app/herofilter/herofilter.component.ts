import { Component } from '@angular/core'
import { HeroFilter } from 'src/types/HeroFilter';
import { HeroFilterRepository } from '../repositories/HeroFilterRepository';
import { HeroFilterComponentModel } from './HeroFilterComponentModel';

@Component({
  selector: 'herofilter',
  templateUrl: './herofilter.component.html'
})
export class HeroFilterComponent implements HeroFilterComponentModel {
  heroFilter?: HeroFilter;

  heroFilterRepository: HeroFilterRepository;

  constructor(heroFilterRepository: HeroFilterRepository,) {
    this.heroFilterRepository = heroFilterRepository;
    this.heroFilter = heroFilterRepository.heroFilter;
    console.log('initing filter')
    console.log(this.heroFilter)
  }

  onChange() {
    console.log('keyup')
    this.heroFilterRepository.heroFilterEvent.emit(this.heroFilter)
    console.log('keyup done')
  }
}


