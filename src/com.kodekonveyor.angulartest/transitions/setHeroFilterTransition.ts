import { produce } from 'immer';
import { type AppState } from '../types/AppState';

export function setHeroFilterTransition(
  state: AppState,
  action: { payload: string }
): AppState {
  return produce(state, (draft) => {
    draft.componentstates.herofilter.heroFilter = action.payload;
  });
}
