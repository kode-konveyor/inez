import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { type Action } from '@ngrx/store';
import { combineLatest, type Observable } from 'rxjs';
import { exhaustMap, catchError } from 'rxjs/operators';
import { GenericErrorHandler } from 'src/com.kodekonveyor.common/GenericErrorHandler';
import { wrapForMerge } from 'src/com.kodekonveyor.common/wrapForMerge';
import {
  changeUser,
  setAuthenticated,
  storeConfig,
  storeHeroes,
} from '../repositories/actions';
import { ObtainHeroesService } from '../services/ObtainHeroesService';
import { mapToActions } from '../../com.kodekonveyor.common/mapToActions';

@Injectable()
export class ChangeUserEffectService {
  constructor(
    private readonly actions$: Actions,
    private readonly obtainHeroesService: ObtainHeroesService,
    private readonly genericErrorHandlerService: GenericErrorHandler
  ) {
    this.changeUserEffect = this.changeUserEffect.bind(this);
  }

  changeUserEffect(): Observable<Action> {
    return combineLatest([
      this.actions$.pipe(ofType(changeUser.type)),
      this.actions$.pipe(ofType(storeConfig.type)),
    ]).pipe(
      exhaustMap(wrapForMerge(this.obtainHeroesService.obtainHeroes)),
      mapToActions(
        (heroes) => storeHeroes({ payload: heroes }),
        setAuthenticated
      ),
      catchError(this.genericErrorHandlerService.run)
    );
  }
}
