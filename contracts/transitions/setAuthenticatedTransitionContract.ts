import { Contract } from '@kodekonveyor/cdd-ts';
import { bindTransition } from 'src/bindTransition';
import { SetAuthenticatedTransitionService } from 'src/inez/transitions/SetAuthenticatedTransitionService';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const setAuthenticatedTransitionContractParties = [
  bindTransition(SetAuthenticatedTransitionService),
];

export const setAuthenticatedTransitionContract = new Contract<
  SetAuthenticatedTransitionService['setAuthenticatedTransition']
>()
  .setTitle('records that the user is authenticated')

  .ifCalledWith(TransitionTestData.initialState)
  .thenReturn(
    'works in initial state',
    TransitionTestData.initalStateAuthenticated
  )
  .ifCalledWith(TransitionTestData.nonInitialState)
  .thenReturn(
    'does not change anything else',
    TransitionTestData.nonInitalStateAuthenticated
  );
