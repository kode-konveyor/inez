import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { type Action } from '@ngrx/store';
import { combineLatest, type Observable } from 'rxjs';
import { exhaustMap, catchError } from 'rxjs/operators';
import { GenericErrorHandler } from 'src/com.kodekonveyor.common/GenericErrorHandler';
import { wrapForMerge } from 'src/com.kodekonveyor.common/wrapForMerge';
import {
  clearSelectedHero,
  createHero,
  storeConfig,
  storeHero,
} from '../repositories/actions';
import { SaveHeroService } from '../services/SaveHeroService';
import { mapToActions } from '../../com.kodekonveyor.common/mapToActions';

@Injectable()
export class CreateHeroEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly saveHeroService: SaveHeroService,
    private readonly genericErrorHandlerService: GenericErrorHandler
  ) {
    this.createHeroEffect = this.createHeroEffect.bind(this);
  }

  createHeroEffect(): Observable<Action> {
    return combineLatest([
      this.actions$.pipe(ofType(createHero.type)),
      this.actions$.pipe(ofType(storeConfig.type)),
    ]).pipe(
      exhaustMap(wrapForMerge(this.saveHeroService.run)),
      mapToActions((hero) => storeHero({ payload: hero }), clearSelectedHero),
      catchError(this.genericErrorHandlerService.run)
    );
  }
}
