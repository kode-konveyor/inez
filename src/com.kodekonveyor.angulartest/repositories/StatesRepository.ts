import { createReducer, on } from "@ngrx/store";
import { clearSelectedHero, setBaseUrl, setCreateMode, setHeroFilter, setSelectedHero } from "./actions";
import { clearSelectedHeroTransition } from "../transitions/clearSelectedHeroTransition";
import { setCreateModeTransition } from "../transitions/setCreateModeTransition";
import { setHeroFilterTransition } from "../transitions/setHeroFilterTransition";
import { setSelectedHeroTransition } from "../transitions/setSelectedHeroTransition";
import { States } from "../types/States";
import { setBaseUrlTransition } from "../transitions/setBaseUrlTransition";

export const statesInitialState: States =
{
  createMode: false,
  heroFilter: "",
  selectedHero: {
    id: null,
    name: ""
  },
  baseURL: ""
}

export const statesReducer = createReducer(
  statesInitialState,
  on(setCreateMode, setCreateModeTransition),
  on(setHeroFilter, setHeroFilterTransition),
  on(clearSelectedHero, clearSelectedHeroTransition),
  on(setSelectedHero, setSelectedHeroTransition),
  on(setBaseUrl, setBaseUrlTransition),
);
