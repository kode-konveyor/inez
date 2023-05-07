import { Contract } from '@kodekonveyor/cdd-ts';
import { bindTransition } from 'src/bindTransition';
import { StoreSelbriTransitionService } from 'src/inez/transitions/StoreSelbriTransitionService';
import { ActionTestData } from 'testdata/ActionTestData';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const storeSelbriTransitionContractParties = [
  bindTransition(StoreSelbriTransitionService),
];

export const storeSelbriTransitionContract = new Contract<
  StoreSelbriTransitionService['storeSelbriTransition']
>()
  .setTitle('store selbri')

  .ifCalledWith(TransitionTestData.initialState, ActionTestData.storeSelbri)
  .thenReturn(
    'a new selbriitem created, the selbri is put in it, its id is put to the selbrilist, and if the selbri is not selected, its selected state is set to false',
    TransitionTestData.initialStateSelbriStored
  )

  .ifCalledWith(TransitionTestData.nonInitialState, ActionTestData.storeSelbri)
  .thenReturn(
    'nothing is changed beyond the new selbriitem and the selbrilist. If the selbri is selected, its selected state is set to true',
    TransitionTestData.nonInitialStateSelbriStored
  );
