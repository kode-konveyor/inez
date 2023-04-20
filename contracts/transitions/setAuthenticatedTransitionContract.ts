import { Contract } from 'cdd-ts';
import { setAuthenticatedTransition } from 'src/com.kodekonveyor.angulartest/transitions/setAuthenticatedTransition';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const setAuthenticatedTransitionContractParties = [
  setAuthenticatedTransition,
];

export const setAuthenticatedTransitionContract = new Contract<
  typeof setAuthenticatedTransition
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
