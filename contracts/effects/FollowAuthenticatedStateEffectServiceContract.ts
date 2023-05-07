import { type AuthService } from '@auth0/auth0-angular';
import { Contract } from '@kodekonveyor/cdd-ts';
import { GenericErrorHandlerService } from 'src/common/GenericErrorHandlerService';
import { ActionFeeder } from 'testdata/helpers/ActionFeeder';
import { returnsEmptyObservable } from 'testdata/helpers/returnsEmptyObservable';
import { of } from 'rxjs';
import { ActionSequenceTestData } from 'testdata/ActionSequenceTestData';
import { type Action } from '@ngrx/store';
import { emitsvalues } from 'testdata/helpers/emitsvalues';
import { ExternalServices } from 'testdata/ExternalServices';
import { FollowAuthenticatedStateEffectService } from 'src/inez/effects/FollowAuthenticatedStateEffectService';

const authService = { user$: ActionFeeder.actions } as unknown as AuthService;

const genericErrorHandlerService = new GenericErrorHandlerService();

export const FollowAuthenticatedStateEffectServiceContractParties = [
  new FollowAuthenticatedStateEffectService(
    authService,
    genericErrorHandlerService,
    ExternalServices.synchronizer
  ).followAuthenticatedStateEffect,
];
export const FollowAuthenticatedStateEffectServiceContract = new Contract<
  FollowAuthenticatedStateEffectService['followAuthenticatedStateEffect']
>()

  .when('no actions arriving', new ActionFeeder('default'))
  .ifCalledWith()
  .thenReturn('for no events there is nothing returned', {
    default: () => of(),
    check: returnsEmptyObservable,
  })

  .when(
    'config is stored and selbri created',
    new ActionFeeder('authenticateduser')
  )
  .ifCalledWith()
  .thenReturn('a store event for authenticated is emitted', {
    default: () =>
      of(ActionSequenceTestData.authenticatedEvent() as unknown as Action),
    check: emitsvalues(ActionSequenceTestData.authenticatedEvent()),
  });
