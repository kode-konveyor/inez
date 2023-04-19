import { produce } from 'immer';
import { type ActionArgument } from 'src/com.kodekonveyor.common/ActionArgument';
import { type setSelectedHero } from '../repositories/actions';
import { type AppState } from '../types/AppState';

export function setSelectedHeroTransition(
  state: AppState,
  action: ActionArgument<typeof setSelectedHero>
): AppState {
  const hero = action.payload;

  return produce(state, (draft) => {
    draft.componentstates.heroeditor = {
      createMode: false,
      show: true,
      selectedHeroId: hero.id,
      selectedHeroName: hero.name,
    };
    for (const key of Object.keys(state.componentstates.heroitem)) {
      const item = draft.componentstates.heroitem[key];
      item.selected = item.hero.id === hero.id;
    }
  });
}
