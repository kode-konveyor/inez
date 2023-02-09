import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { combineLatest, Observable, of } from 'rxjs';
import { exhaustMap, catchError } from 'rxjs/operators';
import { GenericErrorHandler } from 'src/com.kodekonveyor.common/GenericErrorHandler';
import { wrapForMerge } from 'src/com.kodekonveyor.common/wrapForMerge';
import { changeUser, setAuthenticated, storeConfig, storeHeroes } from '../repositories/actions';
import { ObtainHeroesService } from '../services/ObtainHeroesService';
import { Heroes } from '../types/Heroes';


@Injectable()
export class ChangeUserEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly obtainHeroesService: ObtainHeroesService,
    private readonly genericErrorHandlerService: GenericErrorHandler,
  ) { }

  private readonly actionMapping = (heroes: Heroes): Observable<Action> => {
    return of(
      storeHeroes({ payload: heroes }),
      setAuthenticated(),
    );
  };

  bar = this.actions$.subscribe(
    e => console.log("action", e)
  )

  changeUsereffect$ = createEffect(() =>

    combineLatest([
      this.actions$.pipe(
        ofType(changeUser.type)),
      this.actions$.pipe(
        ofType(storeConfig.type)),
    ]).pipe(
      exhaustMap(wrapForMerge(this.obtainHeroesService.run)),
      exhaustMap(this.actionMapping),
      catchError(this.genericErrorHandlerService.run),
    ),
    { dispatch: true }
  )
}

