import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { exhaustMap, catchError } from 'rxjs/operators';
import { GenericErrorHandlerServiceEmmitter } from 'src/com.kodekonveyor.common/GenericErrorHandlerServiceEmitter';
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { clearSelectedHero, createHero, storeHero } from '../repositories/actions';
import { states } from '../repositories/Repository';
import { SaveHeroService } from '../services/SaveHeroService';
import { Hero } from '../types/Hero';

@Injectable()
export class CreateHeroEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly saveHeroService: SaveHeroService,
    private readonly genericErrorHandlerServiceEmmitter: GenericErrorHandlerServiceEmmitter,
    private readonly synchronizer: Synchronizer
  ) { }

  private readonly actiontype = createHero.type;

  private readonly selectors = {
    baseURL: states.states.baseURL
  };

  private readonly service = this.saveHeroService.run;

  private readonly errorService = this.genericErrorHandlerServiceEmmitter.run;

  private readonly actionMapping = (hero: Hero): Observable<Action> => {
    return of(
      storeHero({ payload: hero }),
      clearSelectedHero()
    );
  };

  changeUsereffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(this.actiontype),
      concatLatestFrom(() => this.synchronizer.getStoreView(this.selectors)),
      exhaustMap(this.service),
      catchError(this.errorService),
      exhaustMap(this.actionMapping),
    ),
    { dispatch: true }
  )
}

