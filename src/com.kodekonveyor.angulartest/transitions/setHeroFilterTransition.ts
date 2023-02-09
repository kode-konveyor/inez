import produce from "immer";
import { AppState } from "../types/AppState";

export function setHeroFilterTransition(
  state: AppState,
  action: { payload: String; }): AppState {
  return produce(state, draft => {
    draft.componentstates.herofilter.heroFilter = action.payload
  });
}
