import { Contract } from 'cdd-ts';
import { bindTransition } from 'src/bindTransition';
import { ClearSelectedHeroTransitionService } from 'src/com.kodekonveyor.angulartest/transitions/ClearSelectedHeroTransitionService';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const clearSelectedHeroTransitionContractParties = [
  bindTransition(ClearSelectedHeroTransitionService),
];
export const clearSelectedHeroTransitionContract = new Contract<
  ClearSelectedHeroTransitionService['clearSelectedHeroTransition']
>()
  .setTitle('clears the selected hero state')
  .ifCalledWith(TransitionTestData.initialStateHeroEditorChanged)
  .thenReturn(
    'the heroeditor componentstate is reset to its initial state',
    TransitionTestData.initialState
  )
  .ifCalledWith(TransitionTestData.nonInitialState)
  .thenReturn(
    'other states are not changed',
    TransitionTestData.nonInitialStateHeroEditorReset
  );
