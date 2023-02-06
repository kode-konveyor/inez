import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { exhaustMap, catchError } from 'rxjs/operators';
import { GenericErrorHandlerServiceEmmitter } from 'src/com.kodekonveyor.common/GenericErrorHandlerServiceEmitter';
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { storeHero, storeHeroes } from '../repositories/actions';
import { Heroes } from '../types/Heroes';

@Injectable()
export class StoreHeroesEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly genericErrorHandlerServiceEmmitter: GenericErrorHandlerServiceEmmitter,
    private readonly synchronizer: Synchronizer
  ) { }

  private readonly actiontype = storeHeroes.type;

  private readonly errorService = this.genericErrorHandlerServiceEmmitter.run;

  private readonly service2 = (action: { payload: Heroes }): Observable<Action> => {
    const actions = []
    for (const hero of action.payload) {
      actions.push(storeHero({ payload: hero }))
    }
    return of(...actions);
  };

  changeUsereffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(this.actiontype),
      exhaustMap(this.service2),
      catchError(this.errorService),
    ),
    { dispatch: true }
  )
}

