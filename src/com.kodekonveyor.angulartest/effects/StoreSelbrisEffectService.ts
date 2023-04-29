import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { type Action } from '@ngrx/store';
import { type Observable } from 'rxjs';
import { exhaustMap, catchError } from 'rxjs/operators';
import { GenericErrorHandlerService } from 'src/com.kodekonveyor.common/GenericErrorHandlerService';
import { storeSelbris } from '../repositories/actions';
import { StoreSelbrisService } from '../services/StoreSelbrisService';

@Injectable()
export class StoreSelbrisEffectService {
  constructor(
    private readonly actions$: Actions,
    private readonly genericErrorHandlerService: GenericErrorHandlerService,
    private readonly storeSelbrisService: StoreSelbrisService
  ) {
    this.storeSelbrisEffect = this.storeSelbrisEffect.bind(this);
  }

  storeSelbrisEffect(): Observable<Action> {
    return this.actions$.pipe(
      ofType(storeSelbris.type),
      exhaustMap(this.storeSelbrisService.storeSelbris),
      catchError(this.genericErrorHandlerService.genericErrorHandler)
    );
  }
}
