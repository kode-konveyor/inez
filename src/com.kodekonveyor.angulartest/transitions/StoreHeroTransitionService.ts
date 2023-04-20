import { produce } from 'immer';
import { type AppState } from '../types/AppState';
import { type Hero } from '../types/Hero';
import { HEROITEM_ID_PREFIX } from './TransitionConstants';

export class StoreHeroTransitionService {
  storeHeroTransition(state: AppState, action: { payload: Hero }): AppState {
    const hero = action.payload;
    return produce(state, (draft) => {
      draft.componentstates.heroitem[HEROITEM_ID_PREFIX + hero.id.toString()] =
        {
          hero,
          selected: state.componentstates.heroeditor.selectedHeroId === hero.id,
        };
      draft.componentstates.herolist.heroids.push(hero.id);
    });
  }
}
