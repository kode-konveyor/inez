import { Injectable } from '@angular/core';
import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';
import { UrlMapConstants } from './UrlMapConstants';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { changeUser, storeConfig } from '../repositories/actions';
import { ActionArgument } from 'src/com.kodekonveyor.common/ActionArgument';

export type ObtainHeroesServiceType = (changeUserAction: ActionArgument<typeof changeUser>, storeConfigAction: ActionArgument<typeof storeConfig>) => Observable<Heroes>

@Injectable()
export class ObtainHeroesService {


  constructor(
    readonly httpClient: HttpClient,
  ) {
  }

  run = (changeUserAction: ActionArgument<typeof changeUser>, storeConfigAction: ActionArgument<typeof storeConfig>): Observable<Heroes> => {
    const user = changeUserAction.payload;
    if (user == null)
      return of();
    const baseURL = storeConfigAction.payload.baseUrl
    return this.httpClient.get<Heroes>(baseURL.concat(UrlMapConstants.GET_HEROES_URL))
  };

}
