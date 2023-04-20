import { produce } from 'immer';
import { initialState } from '../states/initialState';
import { type AppState } from '../types/AppState';

export class ClearSelectedHeroTransitionService {
  clearSelectedHeroTransition(state: AppState): AppState {
    return produce(state, (draft) => {
      draft.componentstates.heroeditor =
        initialState.componentstates.heroeditor;
    });
  }
}
