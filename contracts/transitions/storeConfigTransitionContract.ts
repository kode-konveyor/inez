import { Contract } from 'cdd-ts';
import { bindTransition } from 'src/bindTransition';
import { StoreConfigTransitionService } from 'src/com.kodekonveyor.angulartest/transitions/StoreConfigTransitionService';
import { ActionTestData } from 'testdata/ActionTestData';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const storeConfigTransitionContractParties = [
  bindTransition(StoreConfigTransitionService),
];

export const storeConfigTransitionContract = new Contract<
  StoreConfigTransitionService['storeConfigTransition']
>()
  .setTitle('store config from the event')

  .ifCalledWith(TransitionTestData.initialState, ActionTestData.storeConfig)
  .thenReturn(
    'sets the baseUrl to the payload',
    TransitionTestData.initialStateConfigured
  );
