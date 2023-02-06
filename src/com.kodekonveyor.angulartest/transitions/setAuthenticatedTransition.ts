import { AppState } from "../types/AppState";

export function setAuthenticatedTransition(
  state: AppState): AppState {
  return {
    ...state,
    componentstates: {
      ...state.componentstates,
      heroes: {
        authenticated: true
      }
    }
  };
}
