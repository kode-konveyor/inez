import produce from "immer";
import { AppState } from "../types/AppState";

export function setAuthenticatedTransition(
  state: AppState): AppState {
  return produce(state, draft => {
    draft.componentstates.heroes.authenticated = true;
  });
}
