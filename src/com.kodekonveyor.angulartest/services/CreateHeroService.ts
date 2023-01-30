import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addHero, setCreateMode, setSelectedHero } from '../repositories/actions';
import { statesInitialState } from '../repositories/StatesRepository';
import { AppStore } from '../types/AppStore';
import { Hero } from '../types/Hero';
import { States } from '../types/States';
import { Synchronizer } from './Synchronizer';
import { UrlMapConstants } from './UrlMapConstants';

@Injectable()
export class CreateHeroService {

  states: States = statesInitialState;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly store: Store<AppStore>,
    private readonly synchronizer: Synchronizer
  ) {
    this.synchronizer.fromStore('states').subscribe(synchronizer.synchronizeCopyTo(this, 'states'))
  }

  public run(selectedHero: Hero): void {
    this.httpClient.post<Hero>(this.states.baseURL.concat(UrlMapConstants.ADD_HERO_URL), selectedHero).subscribe(
      (hero: Hero) => {
        this.store.dispatch(addHero({ payload: hero }));
        this.store.dispatch(setSelectedHero({ payload: hero }))
        this.store.dispatch(setCreateMode({ payload: false }))
      });
  }
}
