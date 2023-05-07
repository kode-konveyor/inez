import { produce } from 'immer';
import { type AppState } from '../types/AppState';
import { type messageForUser } from '../repositories/actions';
import { type ActionArgument } from '../../common/ActionArgument';

export class MessageForUserTransitionService {
  messageForUserTransition(
    state: AppState,
    action: ActionArgument<typeof messageForUser>
  ): AppState {
    return produce(state, (draft) => {
      const id = String(Object.keys(state.componentstates.userMessages).length);
      draft.componentstates.userMessages[id] = {
        id,
        kind: action.kind,
        message: action.msg,
        subject: String(action.subject),
      };
      draft.componentstates.commandline = {
        line: draft.componentstates.commandline.line,
        messageIDs: [...draft.componentstates.commandline.messageIDs, id],
      };
    });
  }
}
