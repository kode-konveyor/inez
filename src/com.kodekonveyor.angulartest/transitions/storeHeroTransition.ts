import { AppState } from "../types/AppState";
import { Hero } from "../types/Hero";
import { HEROITEM_ID_PREFIX } from "./TransitionConstants";

export function storeHeroTransition(
  state: AppState,
  action: { payload: Hero; }): AppState {
  const hero = action.payload
  const heroitems = window.structuredClone(state.componentstates.heroitem);
  heroitems[HEROITEM_ID_PREFIX + hero.id.toString()] =
  {
    hero,
    selected: state.componentstates.heroeditor.selectedHeroId === hero.id
  }

  return {
    ...state,
    heroes: state.heroes.concat([hero]),
    componentstates: {
      ...state.componentstates,
      herolist: {
        heroids: state.componentstates.herolist.heroids.concat([hero.id])
      },
      heroitem: heroitems,
    }
  };
}
