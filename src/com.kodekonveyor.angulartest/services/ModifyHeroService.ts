import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { modifyHero } from '../repositories/actions';
import { AppStore } from '../repositories/AppStore';
import { Hero } from '../types/Hero';

@Injectable()
export class ModifyHeroService {

  constructor(
    private readonly store: Store<AppStore>
  ) {
  }

  public run(selectedHero: Hero): void {
    this.store.dispatch(modifyHero({ hero: selectedHero }))
  }
}
