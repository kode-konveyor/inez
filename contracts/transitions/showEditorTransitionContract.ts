import { Contract } from 'cdd-ts';
import { bindTransition } from 'src/bindTransition';
import { ShowEditorTransitionService } from 'src/com.kodekonveyor.angulartest/transitions/ShowEditorTransitionService';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const showEditorTransitionContractParties = [
  bindTransition(ShowEditorTransitionService),
];

export const showEditorTransitionContract = new Contract<
  ShowEditorTransitionService['showEditorTransition']
>()
  .setTitle('show editor')

  .ifCalledWith(TransitionTestData.nonInitialState)
  .thenReturn(
    'sets cratemode and show to true, and the id and name of the selected selbri to empty',
    TransitionTestData.nonInitialStateSelbriEditorShown
  );
