import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { type Action } from '@ngrx/store';
import { combineLatest, type Observable, of } from 'rxjs';
import { exhaustMap, catchError } from 'rxjs/operators';
import { GenericErrorHandler } from 'src/com.kodekonveyor.common/GenericErrorHandler';
import { wrapForMerge } from 'src/com.kodekonveyor.common/wrapForMerge';
import { clearSelectedHero, createHero, storeConfig, storeHero } from '../repositories/actions';
import { SaveHeroService } from '../services/SaveHeroService';
import { type Hero } from '../types/Hero';

@Injectable()
export class CreateHeroEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly saveHeroService: SaveHeroService,
    private readonly genericErrorHandlerService: GenericErrorHandler,
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

