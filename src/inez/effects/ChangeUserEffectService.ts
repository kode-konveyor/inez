import { Actions, ofType } from '@ngrx/effects';
import { GenericErrorHandlerService } from 'src/common/GenericErrorHandlerService';
import {
  changeUser,
  setAuthenticated,
  storeConfig,
  storeSelbris,
} from '../repositories/actions';
import { ObtainSelbrisService } from '../services/ObtainSelbrisService';
import { mapToActions } from '../../common/mapToActions';
import { Injectable } from '@angular/core';
import { combineLatest, exhaustMap, catchError, type Observable } from 'rxjs';
import { type Action } from '@ngrx/store';

@Injectable()
export class ChangeUserEffectService {
  constructor(
    private readonly actions$: Actions,
    private readonly obtainSelbrisService: ObtainSelbrisService,
    private readonly genericErrorHandlerService: GenericErrorHandlerService
  ) {
    this.changeUserEffect = this.changeUserEffect.bind(this);
  }

  changeUserEffect(): Observable<Action> {
    return combineLatest({
      changeUserAction: this.actions$.pipe(ofType(changeUser.type)),
      storeConfigAction: this.actions$.pipe(ofType(storeConfig.type)),
    }).pipe(
      exhaustMap(this.obtainSelbrisService.obtainSelbris),
      mapToActions(
        (selbris) => storeSelbris({ payload: selbris }),
        setAuthenticated
      ),
      catchError(this.genericErrorHandlerService.genericErrorHandler)
    );
  }
}
