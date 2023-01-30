import { States } from "../types/States";
import { statesInitialState } from "../repositories/StatesRepository";

export function clearSelectedHeroTransition(
  state: States): States {
  return {
    ...state,
    selectedHero: statesInitialState.selectedHero
  };
}
