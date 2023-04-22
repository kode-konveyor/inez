import { Injectable } from '@angular/core';
import { type Observable, of } from 'rxjs';
import { type ActionArgument } from '../../com.kodekonveyor.common/ActionArgument';
import { type changeUser, type storeConfig } from '../repositories/actions';
import { type Heroes } from '../types/Heroes';
import { UrlMapConstants } from './UrlMapConstants';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ObtainHeroesService {
  constructor(private readonly httpClient: HttpClient) {
    this.obtainHeroes = this.obtainHeroes.bind(this);
  }

  obtainHeroes(arg: {
    changeUserAction: ActionArgument<typeof changeUser>;
    storeConfigAction: ActionArgument<typeof storeConfig>;
  }): Observable<Heroes> {
    const user = arg.changeUserAction.payload;
    if (user == null) return of();
    const baseURL = arg.storeConfigAction.payload.baseUrl;
    const returnValue = this.httpClient.get<Heroes>(
      baseURL.concat(UrlMapConstants.GET_HEROES_URL)
    );
    return returnValue;
  }
}
