import produce from "immer";
import { initialState } from "../repositories/Repository";
import { AppState } from "../types/AppState";

export function clearSelectedHeroTransition(
  state: AppState
): AppState {
  return produce(state, draft => {
    draft.componentstates.heroeditor = initialState.componentstates.heroeditor;
  })
}
