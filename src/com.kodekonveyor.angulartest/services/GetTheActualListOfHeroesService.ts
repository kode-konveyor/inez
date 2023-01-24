import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ObtainHeroesService } from 'src/com.kodekonveyor.angulartest/services/ObtainHeroesService';
import { addHero } from '../repositories/actions';
import { AppStore } from '../types/AppStore';
import { Hero } from '../types/Hero';
import { Heroes } from '../types/Heroes';


@Injectable()
export class GetTheActualListOfHeroesService {

  store: Store<AppStore>;

  obtainHeroesService: ObtainHeroesService;

  run(): void {

    this.obtainHeroesService.run().subscribe(
      (heroes: Heroes) => {

        if (heroes != null) {
          heroes.forEach((hero: Hero) => {
            this.store.dispatch(addHero({ payload: hero }));
          })
        }
      })
  };

  constructor(appStore: Store<AppStore>, obtainHeroesService: ObtainHeroesService) {
    this.store = appStore;
    this.obtainHeroesService = obtainHeroesService;
  }

}


