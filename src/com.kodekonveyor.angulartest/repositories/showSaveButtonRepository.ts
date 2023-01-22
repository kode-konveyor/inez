import { createReducer, on } from "@ngrx/store";
import { setCreateMode } from "./actions";

const createModeInitialState: boolean = false;

function setCreateModeTransition(state: boolean): boolean {
  return true;
}

export const createModeReducer = createReducer(
  createModeInitialState,
  on(setCreateMode, setCreateModeTransition),
);
