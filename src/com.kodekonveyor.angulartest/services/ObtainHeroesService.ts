import { Injectable } from '@angular/core';
import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';
import { UrlMapConstants } from './UrlMapConstants';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { changeUser, storeConfig } from '../repositories/actions';
import { ActionArgument } from 'src/com.kodekonveyor.common/ActionArgument';

@Injectable()
export class ObtainHeroesService {


  constructor(
    readonly httpClient: HttpClient,
  ) {
  }

  run = (args: [ActionArgument<typeof changeUser>, ActionArgument<typeof storeConfig>], index: number): Observable<Heroes> => {
    const user = args[0].payload;
    if (user == null)
      return of();
    const baseURL = args[1].payload.baseUrl
    return this.httpClient.get<Heroes>(baseURL.concat(UrlMapConstants.GET_HEROES_URL))
  };

}
