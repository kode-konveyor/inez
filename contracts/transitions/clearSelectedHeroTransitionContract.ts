import { Contract } from 'cdd-ts';
import { clearSelectedHeroTransition } from 'src/com.kodekonveyor.angulartest/transitions/clearSelectedHeroTransition';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const clearSelectedHeroTransitionContractParties = [
  clearSelectedHeroTransition,
];
export const clearSelectedHeroTransitionContract = new Contract<
  typeof clearSelectedHeroTransition
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
