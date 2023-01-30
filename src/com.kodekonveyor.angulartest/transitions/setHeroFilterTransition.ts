import { States } from "../types/States";

export function setHeroFilterTransition(
  state: States,
  action: { payload: String; }): States {
  return {
    ...state,
    heroFilter: action.payload
  };
}
