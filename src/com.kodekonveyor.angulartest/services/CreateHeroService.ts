import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addHero, setCreateMode, setSelectedHero } from '../repositories/actions';
import { AppStore } from '../types/AppStore';
import { Hero } from '../types/Hero';
import { UrlMapConstants } from './UrlMapConstants';

@Injectable()
export class CreateHeroService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly store: Store<AppStore>
  ) { }

  public run(selectedHero: Hero): void {
    this.httpClient.post<Hero>(UrlMapConstants.ADD_HERO_URL, selectedHero).subscribe(
      (hero: Hero) => {
        this.store.dispatch(addHero({ payload: hero }));
        this.store.dispatch(setSelectedHero({ payload: hero }))
        this.store.dispatch(setCreateMode({ payload: false }))
      });
  }
}
