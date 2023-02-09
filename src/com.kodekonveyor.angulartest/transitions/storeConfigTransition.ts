import produce from "immer";
import { AppState } from "../types/AppState";
import { Config } from "../types/Config";

export function storeConfigTransition(
  state: AppState,
  action: { payload: Config; }
): AppState {
  return produce(state, draft => {
    draft.states.baseURL = action.payload.baseUrl
  });
}
