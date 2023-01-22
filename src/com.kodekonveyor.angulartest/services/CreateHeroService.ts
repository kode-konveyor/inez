import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addHero, setCreateMode, setSelectedHero } from '../repositories/actions';
import { AppStore } from '../repositories/AppStore';
import { Hero } from '../types/Hero';

@Injectable()
export class CreateHeroService {

  readonly REST_API_URL = "/angulartest/hero/add";

  constructor(
    private readonly httpClient: HttpClient,
    private readonly store: Store<AppStore>
  ) {
  }

  public run(selectedHero: Hero): void {
    this.httpClient.post<Hero>(this.REST_API_URL, selectedHero).subscribe(
      (hero: Hero) => {
        this.store.dispatch(addHero({ hero }));
        this.store.dispatch(setSelectedHero({ hero }))
        this.store.dispatch(setCreateMode({ createMode: false }))
      });
  }
}
