import { Injectable } from '@angular/core';
import { UrlMapConstants } from './UrlMapConstants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../types/Hero';
import { createHero } from '../repositories/actions';
import { ActionArgument } from 'src/com.kodekonveyor.common/ActionArgument';

@Injectable()
export class SaveHeroService {

  constructor(
    readonly httpClient: HttpClient,
  ) {
  }

  run = (
    arg: [ActionArgument<typeof createHero>, { baseURL: string; }],
    index: number
  ): Observable<Hero> => {
    const baseURL = arg[1].baseURL;
    const hero: Hero = { id: "", name: arg[0].payload };
    return this.httpClient.post<Hero>(baseURL.concat(UrlMapConstants.ADD_HERO_URL), hero)
  };

}
