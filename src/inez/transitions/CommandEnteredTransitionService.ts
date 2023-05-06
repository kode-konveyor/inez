import { produce } from 'immer';
import { type AppState } from '../types/AppState.js';

export class CommandEnteredTransitionService {
  commandEnteredTransition(state: AppState): AppState {
    return produce(state, (draft) => {
      draft.componentstates.commandline = {
        line: '',
        messageIDs: draft.componentstates.commandline.messageIDs,
      };
    });
  }
}
