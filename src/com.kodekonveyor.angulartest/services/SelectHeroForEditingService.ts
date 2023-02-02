import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setCreateMode, setSelectedHero } from '../repositories/actions';
import { AppState } from '../types/AppState';
import { Hero } from '../types/Hero';

@Injectable()
export class SelectHeroForEditingService {

  store: Store<AppState>

  constructor(store: Store<AppState>) {
    this.store = store;
  }

  run(hero: Hero): void {
    this.store.dispatch(setCreateMode({ payload: false }))
    this.store.dispatch(setSelectedHero({ payload: hero }))
  }
}

