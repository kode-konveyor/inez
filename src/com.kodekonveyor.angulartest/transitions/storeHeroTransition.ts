import produce from "immer";
import { AppState } from "../types/AppState";
import { Hero } from "../types/Hero";
import { HEROITEM_ID_PREFIX } from "./TransitionConstants";

export function storeHeroTransition(
  state: AppState,
  action: { payload: Hero; }): AppState {
  const hero = action.payload
  return produce(state, draft => {
    draft.componentstates.heroitem[HEROITEM_ID_PREFIX + hero.id.toString()] =
    {
      hero,
      selected: state.componentstates.heroeditor.selectedHeroId === hero.id
    }
    draft.componentstates.herolist.heroids.push(hero.id)
  })
}
