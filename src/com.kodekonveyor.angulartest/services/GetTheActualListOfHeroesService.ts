import { Injectable } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { obtainHeroesService } from '../../legacy/ObtainHeroesService';
import { addHero } from '../repositories/actions';
import { appReducer } from '../repositories/appReducer';
import { AppStore } from '../repositories/AppStore';

declare global {
  // eslint-disable-next-line no-var
  var store: Store<AppStore>;
  // eslint-disable-next-line no-var
  var addHero: any;
  // eslint-disable-next-line no-var
  var appReducer: any;
}


@Injectable()
export class GetTheActualListOfHeroesService {

  store: Store<AppStore>;

  run(): void {
    obtainHeroesService().forEach(hero => {
      this.store.dispatch(addHero(hero))
    }
    )
  };

  constructor(appStore: Store<AppStore>) {
    this.store = appStore;
    globalThis.store = appStore;
    globalThis.addHero = addHero;
    globalThis.appReducer = appReducer;
  }

}


