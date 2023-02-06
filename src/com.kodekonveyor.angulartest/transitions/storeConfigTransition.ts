import { AppState } from "../types/AppState";
import { Config } from "../types/Config";

export function storeConfigTransition(
  state: AppState,
  action: { payload: Config; }): AppState {
  return {
    ...state,
    states: {
      ...state.states,
      baseURL: action.payload.baseUrl
    }
  };
}
