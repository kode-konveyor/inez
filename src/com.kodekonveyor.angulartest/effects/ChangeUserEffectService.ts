import { Actions, ofType } from '@ngrx/effects';
import { GenericErrorHandlerService } from 'src/com.kodekonveyor.common/GenericErrorHandlerService';
import {
  changeUser,
  setAuthenticated,
  storeConfig,
  storeHeroes,
} from '../repositories/actions';
import { ObtainHeroesService } from '../services/ObtainHeroesService';
import { mapToActions } from '../../com.kodekonveyor.common/mapToActions';
import { Injectable } from '@angular/core';
import { combineLatest, exhaustMap, catchError, type Observable } from 'rxjs';
import { type Action } from '@ngrx/store';

@Injectable()
export class ChangeUserEffectService {
  constructor(
    private readonly actions$: Actions,
    private readonly obtainHeroesService: ObtainHeroesService,
    private readonly genericErrorHandlerService: GenericErrorHandlerService
  ) {
    this.changeUserEffect = this.changeUserEffect.bind(this);
  }

  changeUserEffect(): Observable<Action> {
    return combineLatest({
      changeUserAction: this.actions$.pipe(ofType(changeUser.type)),
      storeConfigAction: this.actions$.pipe(ofType(storeConfig.type)),
    }).pipe(
      exhaustMap(this.obtainHeroesService.obtainHeroes),
      mapToActions(
        (heroes) => storeHeroes({ payload: heroes }),
        setAuthenticated
      ),
      catchError(this.genericErrorHandlerService.genericErrorHandler)
    );
  }
}
