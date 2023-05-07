import { Contract } from '@kodekonveyor/cdd-ts';
import { bindTransition } from 'src/bindTransition';
import { SetSelectedSelbriTransitionService } from 'src/inez/transitions/SetSelectedSelbriTransitionService';
import { ActionTestData } from 'testdata/ActionTestData';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const setSelectedSelbriTransitionContractParties = [
  bindTransition(SetSelectedSelbriTransitionService),
];

export const setSelectedSelbriTransitionContract = new Contract<
  SetSelectedSelbriTransitionService['setSelectedSelbriTransition']
>()
  .setTitle('Sets selected selbri')
  .ifCalledWith(
    TransitionTestData.initialState,
    ActionTestData.setSelectedSelbri
  )
  .thenReturn(
    'sets the id and name in the selbri editor',
    TransitionTestData.initialStateSelectedSelbri
  )

  .ifCalledWith(
    TransitionTestData.nonInitialState,
    ActionTestData.setSelectedSelbri
  )
  .thenReturn(
    'no other things are changed',
    TransitionTestData.nonInitialStateSelectedSelbri
  );
