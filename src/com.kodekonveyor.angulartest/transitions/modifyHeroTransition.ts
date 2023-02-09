import produce from 'immer';
import { ActionArgument } from 'src/com.kodekonveyor.common/ActionArgument';
import { modifyHero } from '../repositories/actions';
import { AppState } from '../types/AppState';
import { HEROITEM_ID_PREFIX } from './TransitionConstants';

export function modifyHeroTransition(
  state: AppState,
  action: ActionArgument<typeof modifyHero>
): AppState {

  const hero = action.payload;

  return produce(state, draft => {
    const item = draft.componentstates.heroitem[HEROITEM_ID_PREFIX + hero.id.toString()];
    if (item === undefined) {
      return
    }
    item.hero = hero;
  })
}
