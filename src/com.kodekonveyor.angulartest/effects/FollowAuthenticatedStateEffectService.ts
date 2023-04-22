import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Synchronizer } from 'src/com.kodekonveyor.common/Synchronizer';
import { GenericErrorHandlerService } from '../../com.kodekonveyor.common/GenericErrorHandlerService';
import { changeUser } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { catchError, exhaustMap, type Observable } from 'rxjs';
import { type Action } from '@ngrx/store';

@Injectable()
export class FollowAuthenticatedStateEffectService {
  constructor(
    private readonly authService: AuthService,
    private readonly genericErrorHandlerService: GenericErrorHandlerService,
    private readonly synchronizer: Synchronizer
  ) {
    this.followAuthenticatedStateEffect =
      this.followAuthenticatedStateEffect.bind(this);
  }

  followAuthenticatedStateEffect(): Observable<Action> {
    return this.authService.user$.pipe(
      exhaustMap(this.synchronizer.dispatcher(changeUser)),
      catchError(this.genericErrorHandlerService.genericErrorHandler)
    );
  }
}
