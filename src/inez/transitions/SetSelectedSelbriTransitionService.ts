import { produce } from 'immer';
import { type ActionArgument } from 'src/common/ActionArgument';
import { type setSelectedSelbri } from '../repositories/actions';
import { type AppState } from '../types/AppState';

export class SetSelectedSelbriTransitionService {
  setSelectedSelbriTransition(
    state: AppState,
    action: ActionArgument<typeof setSelectedSelbri>
  ): AppState {
    const selbri = action.payload;

    return produce(state, (draft) => {
      draft.componentstates.selbrieditor = {
        createMode: false,
        show: true,
        selectedSelbriId: selbri.id,
        selectedSelbriName: selbri.representation,
      };
      for (const key of Object.keys(state.componentstates.selbriitem)) {
        const item = draft.componentstates.selbriitem[key];
        item.selected = item.selbri.id === selbri.id;
      }
    });
  }
}
