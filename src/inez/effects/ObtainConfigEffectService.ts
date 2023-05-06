import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Synchronizer } from 'src/common/Synchronizer';
import { UrlMapConstants } from 'src/inez/services/UrlMapConstants';
import { type Config } from 'src/inez/types/Config';
import { GenericErrorHandlerService } from '../../common/GenericErrorHandlerService';
import { storeConfig } from 'src/inez/repositories/actions';
import { exhaustMap, catchError, type Observable } from 'rxjs';
import { type Action } from '@ngrx/store';

@Injectable()
export class ObtainConfigEffectService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly genericErrorHandlerService: GenericErrorHandlerService,
    private readonly synchronizer: Synchronizer
  ) {
    this.obtainConfigEffect = this.obtainConfigEffect.bind(this);
  }

  obtainConfigEffect(): Observable<Action> {
    return this.httpClient
      .get<Config>(UrlMapConstants.CONFIG_URL)
      .pipe(
        exhaustMap(this.synchronizer.dispatcher(storeConfig)),
        catchError(this.genericErrorHandlerService.genericErrorHandler)
      );
  }
}
