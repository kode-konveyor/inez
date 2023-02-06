import { AppState } from "../types/AppState";
import { Hero } from "../types/Hero";
import { HeroitemComponentModel } from "../types/HeroitemComponentModel";

export function setSelectedHeroTransition(
  state: AppState,
  action: { payload: Hero; }): AppState {

  const hero = action.payload;
  return {
    ...state,
    states: {
      ...state.states,
    },
    componentstates: {
      ...state.componentstates,
      heroitem: computeSelectedHero(state, hero),
      heroeditor: {
        createMode: false,
        show: true,
        selectedHeroId: hero.id,
        selectedHeroName: hero.name
      }
    }
  };
}

function computeSelectedHero(state: AppState, hero: Hero): Record<string, HeroitemComponentModel> {
  const newHeroitem: Record<string, HeroitemComponentModel> = {};
  for (const key of Object.keys(state.componentstates.heroitem)) {
    const item = structuredClone(state.componentstates.heroitem[key]);
    newHeroitem[key] = item;
    const isSelected = item.hero.id === hero.id;
    newHeroitem[key].selected = isSelected;
    console.log("newHeroitem", newHeroitem[key])
  }

  return newHeroitem
}

