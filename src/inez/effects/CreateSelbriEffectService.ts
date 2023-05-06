import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { type Action } from '@ngrx/store';
import { combineLatest, type Observable } from 'rxjs';
import { exhaustMap, catchError } from 'rxjs/operators';
import { GenericErrorHandlerService } from 'src/common/GenericErrorHandlerService';
import {
  clearSelectedSelbri,
  createSelbri,
  storeConfig,
  storeSelbri,
} from '../repositories/actions';
import { mapToActions } from '../../common/mapToActions';
import { SaveSelbriService } from '../services/SaveSelbriService';

@Injectable()
export class CreateSelbriEffectService {
  constructor(
    private readonly actions$: Actions,
    private readonly saveSelbriService: SaveSelbriService,
    private readonly genericErrorHandlerService: GenericErrorHandlerService
  ) {
    this.createSelbriEffect = this.createSelbriEffect.bind(this);
  }

  createSelbriEffect(): Observable<Action> {
    return combineLatest({
      createEvent: this.actions$.pipe(ofType(createSelbri.type)),
      configEvent: this.actions$.pipe(ofType(storeConfig.type)),
    }).pipe(
      exhaustMap(this.saveSelbriService.saveSelbri),
      mapToActions(
        (selbri) => storeSelbri({ payload: selbri }),
        clearSelectedSelbri
      ),
      catchError(this.genericErrorHandlerService.genericErrorHandler)
    );
  }
}
