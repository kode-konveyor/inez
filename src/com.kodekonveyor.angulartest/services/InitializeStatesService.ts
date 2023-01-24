import { Injectable } from '@angular/core';
import { GetTheActualListOfHeroesService } from './GetTheActualListOfHeroesService';
import { ObtainUrlBaseService } from './ObtainUrlBaseService';

@Injectable()
export class InitializeStatesService {

  run(): void {
    this.obtainUrlBaseService.run().subscribe(
      () => this.getTheActualListOfHeroesService.run())
  }

  constructor(
    private readonly getTheActualListOfHeroesService: GetTheActualListOfHeroesService,
    private readonly obtainUrlBaseService: ObtainUrlBaseService
  ) {
  }

}
