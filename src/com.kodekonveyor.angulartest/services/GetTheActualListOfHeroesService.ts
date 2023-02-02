import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ObtainHeroesService } from 'src/com.kodekonveyor.angulartest/services/ObtainHeroesService';
import { statesInitialState } from '../repositories/StatesRepository';
import { AppState } from '../types/AppState';
import { States } from '../types/States';
import { Synchronizer } from './Synchronizer';


@Injectable()
export class GetTheActualListOfHeroesService {

  states: States = statesInitialState;


  run(): void {
    this.obtainHeroesService.run()
  };

  constructor(
    private readonly obtainHeroesService: ObtainHeroesService,
    private readonly synchronizer: Synchronizer,
    private readonly store: Store<AppState>
  ) {
    this.synchronizer.fromStore('states').subscribe(synchronizer.synchronizeCopyTo(this, 'states'))
  }

}


