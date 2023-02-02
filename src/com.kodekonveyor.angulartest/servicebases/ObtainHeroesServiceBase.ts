import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Synchronizer } from '../services/Synchronizer';
import { Store } from '@ngrx/store';
import { AppState } from '../types/AppState';
import { getBaseURLFromAppStateOperator } from '../operators/getBaseURLFromAppStateOperator';


@Injectable()
export class ObtainHeroesServiceBase {
  baseURL?: String;

  constructor(
    readonly auth: AuthService,
    readonly httpClient: HttpClient,
    readonly synchronizer: Synchronizer,
    readonly store: Store<AppState>
  ) {
    this.synchronizer.fillFields(this, {
      baseURL: getBaseURLFromAppStateOperator
    });
  }
}
