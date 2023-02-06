import { AppState } from "../types/AppState";

export function setHeroFilterTransition(
  state: AppState,
  action: { payload: String; }): AppState {
  return {
    ...state,
    componentstates: {
      ...state.componentstates,
      herofilter: {
        ...state.componentstates.herofilter,
        heroFilter: action.payload
      }
    }
  };
}
