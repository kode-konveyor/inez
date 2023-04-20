import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { type Observable, of } from 'rxjs';
import { type ActionArgument } from '../../com.kodekonveyor.common/ActionArgument';
import { type changeUser, type storeConfig } from '../repositories/actions';
import { type Heroes } from '../types/Heroes';
import { UrlMapConstants } from './UrlMapConstants';

@Injectable()
export class ObtainHeroesService {
  constructor(readonly httpClient: HttpClient) {
    this.obtainHeroes = this.obtainHeroes.bind(this);
  }

  obtainHeroes(
    changeUserAction: ActionArgument<typeof changeUser>,
    storeConfigAction: ActionArgument<typeof storeConfig>
  ): Observable<Heroes> {
    const user = changeUserAction.payload;
    if (user == null) return of();
    const baseURL = storeConfigAction.payload.baseUrl;
    const returnValue = this.httpClient.get<Heroes>(
      baseURL.concat(UrlMapConstants.GET_HEROES_URL)
    );
    return returnValue;
  }
}
