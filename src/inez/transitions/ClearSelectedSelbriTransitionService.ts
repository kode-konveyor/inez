import { produce } from 'immer';
import { initialState } from '../states/initialState';
import { type AppState } from '../types/AppState';

export class ClearSelectedSelbriTransitionService {
  clearSelectedSelbriTransition(state: AppState): AppState {
    return produce(state, (draft) => {
      draft.componentstates.selbrieditor =
        initialState.componentstates.selbrieditor;
    });
  }
}
