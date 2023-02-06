import { AppState } from "../types/AppState";

export function showEditorTransition(
  state: AppState,
): AppState {
  return {
    ...state,
    componentstates: {
      ...state.componentstates,
      heroeditor: {
        createMode: true,
        show: true,
        selectedHeroId: "",
        selectedHeroName: ""
      }
    }
  };
}
