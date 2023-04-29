import { produce } from 'immer';
import { type ActionArgument } from 'src/com.kodekonveyor.common/ActionArgument';
import { type modifySelbri } from '../repositories/actions';
import { type AppState } from '../types/AppState';
import { HEROITEM_ID_PREFIX } from './TransitionConstants';

export class ModifySelbriTransitionService {
  modifySelbriTransition(
    state: AppState,
    action: ActionArgument<typeof modifySelbri>
  ): AppState {
    const selbri = action.payload;

    return produce(state, (draft) => {
      const item =
        draft.componentstates.selbriitem[
          HEROITEM_ID_PREFIX + selbri.id.toString()
        ];
      if (item === undefined) {
        return;
      }
      item.selbri = selbri;
    });
  }
}
