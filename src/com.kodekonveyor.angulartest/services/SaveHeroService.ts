import { Injectable } from '@angular/core';
import { UrlMapConstants } from './UrlMapConstants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../types/Hero';
import { createHero, storeConfig } from '../repositories/actions';
import { ActionArgument } from 'src/com.kodekonveyor.common/ActionArgument';

@Injectable()
export class SaveHeroService {

  constructor(
    readonly httpClient: HttpClient,
  ) { }

  run = (
    createEvent: ActionArgument<typeof createHero>,
    configEvent: ActionArgument<typeof storeConfig>
  ): Observable<Hero> => {
    const baseURL = configEvent.payload.baseUrl;
    const hero: Hero = { id: "", name: createEvent.payload };
    return this.httpClient.post<Hero>(baseURL.concat(UrlMapConstants.ADD_HERO_URL), hero)
  };

}
