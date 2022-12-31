import { Injectable } from '@angular/core';
import { HeroesComponentModel } from 'src/app/heroes/HeroesComponentModel';
import { GetTheActualListOfHeroesService } from './GetTheActualListOfHeroesService';
import { setHeroFilterService } from './InitializeFilterService';

@Injectable()
export class InitializeStatesService {
  getTheActualListOfHeroesService: GetTheActualListOfHeroesService;
  initializeFilterService: setHeroFilterService;

  run(self: HeroesComponentModel): void {
    this.getTheActualListOfHeroesService.run(self)
    this.initializeFilterService.run({ filterString: '' })
  }

  constructor(getTheActualListOfHeroesService: GetTheActualListOfHeroesService, initializeFilterService: setHeroFilterService) {
    this.getTheActualListOfHeroesService = getTheActualListOfHeroesService;
    this.initializeFilterService = initializeFilterService;
  }

}
