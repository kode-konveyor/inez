import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ObtainHeroesService } from 'src/com.kodekonveyor.angulartest/services/ObtainHeroesService';
import { addHero } from '../repositories/actions';
import { AppStore } from '../repositories/AppStore';
import { Hero } from '../types/Hero';
import { Heroes } from '../types/Heroes';


@Injectable()
export class GetTheActualListOfHeroesService {

  store: Store<AppStore>;

  obtainHeroesService: ObtainHeroesService;

  run(): void {
    console.log("GetTheActualListOfHeroesService")
    this.obtainHeroesService.run().subscribe(
      (heroes: Heroes) => {
        console.log("got heroes:", heroes)
        if (heroes != null) {
          heroes.forEach((hero: Hero) => {
            console.log("adding", hero)
            this.store.dispatch(addHero({ hero }));
          })
        }
      })
  };

  constructor(appStore: Store<AppStore>, obtainHeroesService: ObtainHeroesService) {
    this.store = appStore;
    this.obtainHeroesService = obtainHeroesService;
  }

}


