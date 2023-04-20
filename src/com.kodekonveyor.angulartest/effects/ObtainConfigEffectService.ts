import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { UrlMapConstants } from 'src/com.kodekonveyor.angulartest/services/UrlMapConstants';
import { type Config } from 'src/com.kodekonveyor.angulartest/types/Config';
import { GenericErrorHandler } from '../../com.kodekonveyor.common/GenericErrorHandler';
import { storeConfig } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { exhaustMap, catchError, type Observable } from 'rxjs';
import { type Action } from '@ngrx/store';

@Injectable()
export class ObtainConfigEffectService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly genericErrorHandlerService: GenericErrorHandler,
    private readonly synchronizer: Synchronizer
  ) {
    this.obtainConfigEffect = this.obtainConfigEffect.bind(this);
  }

  obtainConfigEffect(): Observable<Action> {
    return this.httpClient
      .get<Config>(UrlMapConstants.CONFIG_URL)
      .pipe(
        exhaustMap(this.synchronizer.dispatcher(storeConfig)),
        catchError(this.genericErrorHandlerService.run)
      );
  }
}
