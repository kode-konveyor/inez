import { produce } from 'immer';
import { type AppState } from '../types/AppState';

export class SetSelbriFilterTransitionService {
  setSelbriFilterTransition(
    state: AppState,
    action: { payload: string }
  ): AppState {
    return produce(state, (draft) => {
      draft.componentstates.selbrifilter.selbriFilter = action.payload;
    });
  }
}
