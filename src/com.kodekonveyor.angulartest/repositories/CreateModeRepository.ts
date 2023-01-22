import { createReducer, on } from "@ngrx/store";
import { setCreateMode } from "./actions";

const createModeInitialState: Boolean = false;

function setCreateModeTransition(
  state: Boolean,
  newState: { createMode: Boolean })
  : Boolean {
  return newState.createMode;
}

export const createModeReducer = createReducer(
  createModeInitialState,
  on(setCreateMode, setCreateModeTransition),
);
