import { Contract } from 'cdd-ts';
import { CommandEnteredTransitionService } from '../../src/inez/transitions/CommandEnteredTransitionService';
import { bindTransition } from '../../src/bindTransition';
import { TransitionTestData } from '../../testdata/TransitionTestData';

export const commandEnteredTransitionContractParties = [
  bindTransition(CommandEnteredTransitionService),
];

export const commandEnteredTransitionContract = new Contract<
  CommandEnteredTransitionService['commandEnteredTransition']
>()
  .setTitle('clears the command line')
  .ifCalledWith(TransitionTestData.initialStateWithCommand)
  .thenReturn('the command line is cleared', TransitionTestData.initialState);
