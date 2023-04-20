import { Contract } from 'cdd-ts';
import { showEditorTransition } from 'src/com.kodekonveyor.angulartest/transitions/showEditorTransition';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const showEditorTransitionContractParties = [showEditorTransition];

export const showEditorTransitionContract = new Contract<
  typeof showEditorTransition
>()
  .setTitle('show editor')

  .ifCalledWith(TransitionTestData.nonInitialState)
  .thenReturn(
    'sets cratemode and show to true, and the id and name of the selected hero to empty',
    TransitionTestData.nonInitialStateHeroEditorShown
  );
