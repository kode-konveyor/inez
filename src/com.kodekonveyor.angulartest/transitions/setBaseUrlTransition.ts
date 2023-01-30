import { States } from "../types/States";

export function setBaseUrlTransition(
  state: States,
  action: { payload: String; }): States {
  return {
    ...state,
    baseURL: action.payload
  };
}
