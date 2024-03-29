import { produce } from 'immer';
import { type ActionArgument } from 'src/common/ActionArgument';
import { type modifySelbri } from '../repositories/actions';
import { type AppState } from '../types/AppState';

export class ModifySelbriTransitionService {
  modifySelbriTransition(
    state: AppState,
    action: ActionArgument<typeof modifySelbri>
  ): AppState {
    const selbri = action.payload;

    return produce(state, (draft) => {
      const item = draft.componentstates.selbriitem[selbri.id.toString()];
      if (item === undefined) {
        return;
      }
      item.selbri = selbri;
    });
  }
}
