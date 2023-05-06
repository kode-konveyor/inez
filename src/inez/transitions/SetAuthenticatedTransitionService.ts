import { produce } from 'immer';
import { type AppState } from '../types/AppState';

export class SetAuthenticatedTransitionService {
  setAuthenticatedTransition(state: AppState): AppState {
    return produce(state, (draft) => {
      draft.componentstates.selbris.authenticated = true;
    });
  }
}
