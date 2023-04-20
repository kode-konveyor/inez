import { produce } from 'immer';
import { type AppState } from '../types/AppState';
import { type Config } from '../types/Config';

export class StoreConfigTransitionService {
  storeConfigTransition(
    state: AppState,
    action: { payload: Config }
  ): AppState {
    return produce(state, (draft) => {
      draft.states.baseURL = action.payload.baseUrl;
    });
  }
}
