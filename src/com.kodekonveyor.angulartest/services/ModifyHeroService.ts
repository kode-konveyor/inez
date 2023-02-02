import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { modifyHero } from '../repositories/actions';
import { AppState } from '../types/AppState';
import { Hero } from '../types/Hero';

@Injectable()
export class ModifyHeroService {

  constructor(
    private readonly store: Store<AppState>
  ) {
  }

  public run(selectedHero: Hero): void {
    this.store.dispatch(modifyHero({ payload: selectedHero }))
  }
}
