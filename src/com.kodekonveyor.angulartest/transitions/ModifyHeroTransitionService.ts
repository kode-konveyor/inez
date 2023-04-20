import { produce } from 'immer';
import { type ActionArgument } from 'src/com.kodekonveyor.common/ActionArgument';
import { type modifyHero } from '../repositories/actions';
import { type AppState } from '../types/AppState';
import { HEROITEM_ID_PREFIX } from './TransitionConstants';

export class ModifyHeroTransitionService {
  modifyHeroTransition(
    state: AppState,
    action: ActionArgument<typeof modifyHero>
  ): AppState {
    const hero = action.payload;

    return produce(state, (draft) => {
      const item =
        draft.componentstates.heroitem[HEROITEM_ID_PREFIX + hero.id.toString()];
      if (item === undefined) {
        return;
      }
      item.hero = hero;
    });
  }
}
