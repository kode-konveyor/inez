import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { combineLatest, Observable, of } from 'rxjs';
import { exhaustMap, catchError } from 'rxjs/operators';
import { GenericErrorHandlerServiceEmmitter } from 'src/com.kodekonveyor.common/GenericErrorHandlerServiceEmitter';
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { changeUser, setAuthenticated, storeConfig, storeHeroes } from '../repositories/actions';
import { ObtainHeroesService } from '../services/ObtainHeroesService';
import { Heroes } from '../types/Heroes';


@Injectable()
export class ChangeUserEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly obtainHeroesService: ObtainHeroesService,
    private readonly genericErrorHandlerServiceEmmitter: GenericErrorHandlerServiceEmmitter,
    private readonly synchronizer: Synchronizer
  ) { }

  private readonly actiontype = changeUser.type;


  private readonly service1 = this.obtainHeroesService.run;

  private readonly errorService = this.genericErrorHandlerServiceEmmitter.run;

  private readonly service2 = (heroes: Heroes): Observable<Action> => {
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
      exhaustMap(this.service1),
      exhaustMap(this.service2),
      catchError(this.errorService),
    ),
    { dispatch: true }
  )
}

