import { Contract } from '@kodekonveyor/cdd-ts';
import { bindTransition } from 'src/bindTransition';
import { ClearSelectedSelbriTransitionService } from 'src/inez/transitions/ClearSelectedSelbriTransitionService';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const clearSelectedSelbriTransitionContractParties = [
  bindTransition(ClearSelectedSelbriTransitionService),
];
export const clearSelectedSelbriTransitionContract = new Contract<
  ClearSelectedSelbriTransitionService['clearSelectedSelbriTransition']
>()
  .setTitle('clears the selected selbri state')
  .ifCalledWith(TransitionTestData.initialStateSelbriEditorChanged)
  .thenReturn(
    'the selbrieditor componentstate is reset to its initial state',
    TransitionTestData.initialState
  )
  .ifCalledWith(TransitionTestData.nonInitialState)
  .thenReturn(
    'other states are not changed',
    TransitionTestData.nonInitialStateSelbriEditorReset
  );
