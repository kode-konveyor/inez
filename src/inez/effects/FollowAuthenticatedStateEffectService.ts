import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Synchronizer } from 'src/common/Synchronizer';
import { GenericErrorHandlerService } from '../../common/GenericErrorHandlerService';
import { changeUser } from 'src/inez/repositories/actions';
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
    const dispatcher = this.synchronizer.dispatcher(changeUser);
    return this.authService.user$.pipe(
      exhaustMap(dispatcher),
      catchError(this.genericErrorHandlerService.genericErrorHandler)
    );
  }
}
