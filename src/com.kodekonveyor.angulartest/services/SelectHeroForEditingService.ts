import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setCreateMode, setSelectedHero } from '../repositories/actions';
import { AppStore } from '../repositories/AppStore';
import { Hero } from '../types/Hero';

@Injectable()
export class SelectHeroForEditingService {

  store: Store<AppStore>

  constructor(store: Store<AppStore>) {
    this.store = store;
  }

  run(hero: Hero): void {
    this.store.dispatch(setCreateMode({ createMode: false }))
    this.store.dispatch(setSelectedHero({ hero }))
  }
}

