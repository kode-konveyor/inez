import { States } from "../types/States";

export function setCreateModeTransition(
  state: States,
  action: { payload: Boolean; }): States {
  return {
    ...state,
    createMode: action.payload
  };
}
