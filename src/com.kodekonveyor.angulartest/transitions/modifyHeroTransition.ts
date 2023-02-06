import { AppState } from '../types/AppState';
import { Hero } from '../types/Hero';
import { HEROITEM_ID_PREFIX } from './TransitionConstants';

export function modifyHeroTransition(state: AppState, action: { payload: Hero; }): AppState {

  const hero = action.payload;

  const newHeroes = state.heroes.map(
    h => {
      if (h.id === hero.id) {
        return hero;
      }
      return h;
    }
  );

  const newHeroItem = structuredClone(state.componentstates.heroitem)
  newHeroItem[HEROITEM_ID_PREFIX + hero.id.toString()].hero.name = hero.name;


  const newState = {
    ...state,
    heroes: newHeroes,
    componentstates: {
      ...state.componentstates,
      heroitem: newHeroItem
    }
  }

  return newState
}
