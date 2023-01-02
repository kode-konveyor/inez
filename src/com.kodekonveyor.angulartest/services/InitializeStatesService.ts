import { Injectable } from '@angular/core';
import { HeroesComponentModel } from 'src/app/heroes/HeroesComponentModel';
import { GetTheActualListOfHeroesService } from './GetTheActualListOfHeroesService';

@Injectable()
export class InitializeStatesService {
  getTheActualListOfHeroesService: GetTheActualListOfHeroesService;

  run(self: HeroesComponentModel): void {
    this.getTheActualListOfHeroesService.run()
  }

  constructor(getTheActualListOfHeroesService: GetTheActualListOfHeroesService) {
    this.getTheActualListOfHeroesService = getTheActualListOfHeroesService;
  }

}
