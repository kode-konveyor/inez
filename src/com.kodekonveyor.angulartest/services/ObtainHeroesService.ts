import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';
import { statesInitialState } from '../repositories/StatesRepository';
import { States } from '../types/States';
import { Synchronizer } from './Synchronizer';
import { UrlMapConstants } from './UrlMapConstants';

@Injectable()
export class ObtainHeroesService {

  states: States = statesInitialState;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly synchronizer: Synchronizer
  ) {
    this.synchronizer.fromStore('states').subscribe(synchronizer.synchronizeCopyTo(this, 'states'))
  }

  public run(): Observable<Heroes> {
    return this.httpClient.get<Heroes>(this.states.baseURL.concat(UrlMapConstants.GET_HEROES_URL));
  }
}
