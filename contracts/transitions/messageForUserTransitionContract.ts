import { Contract } from '@kodekonveyor/cdd-ts';
import { bindTransition } from '../../src/bindTransition';
import { MessageForUserTransitionService } from '../../src/inez/transitions/MessageForUserTransitionService';
import { messageForUser } from '../../src/inez/repositories/actions';
import { TransitionTestData } from '../../testdata/TransitionTestData';

export const messageForUserTransitionContractParties = [
  bindTransition(MessageForUserTransitionService),
];
export const messageForUserTransitionContract = new Contract()
  .setTitle('stores message for the user')
  .ifCalledWith(TransitionTestData.initialState, () =>
    messageForUser({ kind: 'error', msg: 'message', subject: 'subject' })
  )
  .thenReturn('', TransitionTestData.initialStateWithMessageStored);
