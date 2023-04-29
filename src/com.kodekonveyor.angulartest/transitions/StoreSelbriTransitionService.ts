import { produce } from 'immer';
import { type AppState } from '../types/AppState';
import { type Selbri } from '../types/Selbri';
import { HEROITEM_ID_PREFIX } from './TransitionConstants';

export class StoreSelbriTransitionService {
  storeSelbriTransition(
    state: AppState,
    action: { payload: Selbri }
  ): AppState {
    const selbri = action.payload;
    return produce(state, (draft) => {
      draft.componentstates.selbriitem[
        HEROITEM_ID_PREFIX + selbri.id.toString()
      ] = {
        selbri,
        selected:
          state.componentstates.selbrieditor.selectedSelbriId === selbri.id,
      };
      draft.componentstates.selbrilist.selbriids.push(selbri.id);
    });
  }
}
