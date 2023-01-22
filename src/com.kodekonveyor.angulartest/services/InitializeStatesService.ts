import { Injectable } from '@angular/core';
import { GetTheActualListOfHeroesService } from './GetTheActualListOfHeroesService';

@Injectable()
export class InitializeStatesService {
  getTheActualListOfHeroesService: GetTheActualListOfHeroesService;

  run(): void {

    this.getTheActualListOfHeroesService.run()
  }

  constructor(getTheActualListOfHeroesService: GetTheActualListOfHeroesService) {
    this.getTheActualListOfHeroesService = getTheActualListOfHeroesService;
  }

}
