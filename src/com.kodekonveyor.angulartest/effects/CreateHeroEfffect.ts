import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { combineLatest, Observable, of } from 'rxjs';
import { exhaustMap, catchError } from 'rxjs/operators';
import { GenericErrorHandlerService } from 'src/com.kodekonveyor.common/GenericErrorHandlerService';
import { wrapForMerge } from 'src/com.kodekonveyor.common/wrapForMerge';
import { clearSelectedHero, createHero, storeConfig, storeHero } from '../repositories/actions';
import { SaveHeroService } from '../services/SaveHeroService';
import { Hero } from '../types/Hero';

@Injectable()
export class CreateHeroEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly saveHeroService: SaveHeroService,
    private readonly genericErrorHandlerService: GenericErrorHandlerService,
  ) { }

  private readonly actionMapping = (hero: Hero): Observable<Action> => {
    return of(
      storeHero({ payload: hero }),
      clearSelectedHero()
    );
  };

  changeUsereffect$ = createEffect(() =>
    combineLatest([
      this.actions$.pipe(
        ofType(createHero.type)),
      this.actions$.pipe(
        ofType(storeConfig.type)),
    ]).pipe(
      exhaustMap(wrapForMerge(this.saveHeroService.run)),
      exhaustMap(this.actionMapping),
      catchError(this.genericErrorHandlerService.run),
    ),
    { dispatch: true }
  )
}

