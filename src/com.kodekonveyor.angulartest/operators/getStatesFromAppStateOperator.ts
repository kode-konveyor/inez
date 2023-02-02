import { AppState } from '../types/AppState';
import { States } from '../types/States';

export function getStatesFromAppStateOperator(appState: AppState): States {
  return appState.states;
}
