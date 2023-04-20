import { Contract } from 'cdd-ts';
import { storeConfigTransition } from 'src/com.kodekonveyor.angulartest/transitions/storeConfigTransition';
import { ActionTestData } from 'testdata/TestData';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const storeConfigTransitionContractParties = [storeConfigTransition];

export const storeConfigTransitionContract = new Contract<
  typeof storeConfigTransition
>()
  .setTitle('store config from the event')

  .ifCalledWith(TransitionTestData.initialState, ActionTestData.storeConfig)
  .thenReturn(
    'sets the baseUrl to the payload',
    TransitionTestData.initialStateConfigured
  );
