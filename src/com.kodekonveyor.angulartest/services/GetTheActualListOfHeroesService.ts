import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ObtainHeroesService } from 'src/com.kodekonveyor.angulartest/services/ObtainHeroesService';
import { addHero } from '../repositories/actions';
import { statesInitialState } from '../repositories/StatesRepository';
import { AppStore } from '../types/AppStore';
import { Hero } from '../types/Hero';
import { Heroes } from '../types/Heroes';
import { States } from '../types/States';
import { Synchronizer } from './Synchronizer';


@Injectable()
export class GetTheActualListOfHeroesService {

  states: States = statesInitialState;


  run(): void {

    this.obtainHeroesService.run().subscribe(
      {
        next: (heroes: Heroes) => {
          if (heroes != null) {
            heroes.forEach((hero: Hero) => {
              this.store.dispatch(addHero({ payload: hero }));
            })
          }
        },
        error: (e) => {
          console.log(e);
          const location = window.location;
          console.log(location);
        },
        complete: () => console.info('complete')
      }
    )
  };

  constructor(
    private readonly obtainHeroesService: ObtainHeroesService,
    private readonly synchronizer: Synchronizer,
    private readonly store: Store<AppStore>
  ) {
    this.synchronizer.fromStore('states').subscribe(synchronizer.synchronizeCopyTo(this, 'states'))
  }

}


