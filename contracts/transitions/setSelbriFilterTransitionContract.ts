import { Contract } from '@kodekonveyor/cdd-ts';
import { bindTransition } from 'src/bindTransition';
import { SetSelbriFilterTransitionService } from 'src/inez/transitions/SetSelbriFilterTransitionService';
import { ActionTestData } from 'testdata/ActionTestData';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const setSelbriFilterTransitionContractParties = [
  bindTransition(SetSelbriFilterTransitionService),
];

export const setSelbriFilterTransitionContract = new Contract<
  SetSelbriFilterTransitionService['setSelbriFilterTransition']
>()
  .setTitle('sets the selbri filter')

  .ifCalledWith(TransitionTestData.initialState, ActionTestData.setSelbriFilter)
  .thenReturn(
    'sets the selbri filter to the value of the action',
    TransitionTestData.initialStateSelbrifilterE
  )
  .ifCalledWith(
    TransitionTestData.nonInitialState,
    ActionTestData.setSelbriFilter
  )
  .thenReturn(
    'other things do not change',
    TransitionTestData.nonInitialStateSelbrifilterE
  );
