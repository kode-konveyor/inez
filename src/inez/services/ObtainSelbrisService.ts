import { Injectable } from '@angular/core';
import { type Observable, of } from 'rxjs';
import { type ActionArgument } from '../../common/ActionArgument';
import { type changeUser, type storeConfig } from '../repositories/actions';
import { type Selbris } from '../types/Selbris';
import { UrlMapConstants } from './UrlMapConstants';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ObtainSelbrisService {
  constructor(private readonly httpClient: HttpClient) {
    this.obtainSelbris = this.obtainSelbris.bind(this);
  }

  obtainSelbris(arg: {
    changeUserAction: ActionArgument<typeof changeUser>;
    storeConfigAction: ActionArgument<typeof storeConfig>;
  }): Observable<Selbris> {
    const user = arg.changeUserAction.payload;
    if (user == null) return of();
    const baseURL = arg.storeConfigAction.payload.baseUrl;
    const returnValue = this.httpClient.get<Selbris>(
      baseURL.concat(UrlMapConstants.GET_HEROES_URL)
    );
    return returnValue;
  }
}
