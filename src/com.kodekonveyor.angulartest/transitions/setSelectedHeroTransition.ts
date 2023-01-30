import { Hero } from "../types/Hero";
import { States } from "../types/States";

export function setSelectedHeroTransition(
  state: States,
  action: { payload: Hero; }): States {
  return {
    ...state,
    selectedHero: action.payload
  };
}
