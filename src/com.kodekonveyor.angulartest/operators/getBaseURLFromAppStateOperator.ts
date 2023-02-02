import { AppState } from '../types/AppState';

export function getBaseURLFromAppStateOperator(appState: AppState): String {
    return appState.states.baseURL;
}
