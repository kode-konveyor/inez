import { produce } from 'immer';
import { type AppState } from '../types/AppState';

export class ShowEditorTransitionService {
  showEditorTransition(state: AppState): AppState {
    return produce(state, (draft) => {
      draft.componentstates.selbrieditor = {
        createMode: true,
        show: true,
        selectedSelbriId: '',
        selectedSelbriName: '',
        references: [],
        idToAdd: '',
      };
    });
  }
}
