import { Actions, ofType } from '@ngrx/effects';
import { type Action } from '@ngrx/store';
import { exhaustMap, catchError, type Observable, of } from 'rxjs';
import { GenericErrorHandlerService } from '../../common/GenericErrorHandlerService';
import {
  commandEntered,
  createSelbri,
  messageForUser,
} from '../repositories/actions';
import { CREATE_, EMPTY_STRING, CREATED_SELBRI } from './Constants';
import { Injectable } from '@angular/core';

@Injectable()
export class CommandEnteredEffectService {
  constructor(
    private readonly actions$: Actions,
    private readonly genericErrorHandlerService: GenericErrorHandlerService
  ) {
    this.commandEnteredEffect = this.commandEnteredEffect.bind(this);
  }

  commandEnteredEffect(): Observable<Action> {
    return this.actions$.pipe(
      ofType(commandEntered.type),
      exhaustMap((commandMessage: { payload: string }): Observable<Action> => {
        const payload = commandMessage.payload;
        if (payload.startsWith(CREATE_)) {
          const selbriname = payload.replace(CREATE_, EMPTY_STRING);
          return of(
            messageForUser({
              kind: EMPTY_STRING,
              msg: CREATED_SELBRI,
              subject: selbriname,
            }),
            createSelbri({ payload: selbriname })
          ) as Observable<Action>;
        }
        return of(
          messageForUser({
            kind: 'error',
            msg: 'syntax error',
            subject: commandMessage.payload,
          })
        );
      }),
      catchError(this.genericErrorHandlerService.genericErrorHandler)
    );
  }
}
