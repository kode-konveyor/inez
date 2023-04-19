import { createReducer, on } from "@ngrx/store";
import { clearSelectedHeroTransition } from "../transitions/clearSelectedHeroTransition";
import { modifyHeroTransition } from "../transitions/modifyHeroTransition";
import { showEditorTransition } from "../transitions/showEditorTransition";
import { setHeroFilterTransition } from "../transitions/setHeroFilterTransition";
import { setSelectedHeroTransition } from "../transitions/setSelectedHeroTransition";
import { type AppState } from "../types/AppState";
import { storeConfigTransition } from "../transitions/storeConfigTransition";
import { clearSelectedHero, modifyHero, storeConfig, setHeroFilter, setSelectedHero, showEditor, storeHero, setAuthenticated } from "./actions";
import { storeHeroTransition } from "../transitions/storeHeroTransition";
import { type StoreState } from "../types/StoreState";
import { setAuthenticatedTransition } from "../transitions/setAuthenticatedTransition";
import { type IdType } from "src/com.kodekonveyor.common/IdType";

export const initialState: AppState = {
  states: {
    baseURL: ""
  },
  componentstates: {
    heroeditor: {
      createMode: false,
      show: false,
      selectedHeroId: "",
      selectedHeroName: ""
    },
    herofilter: {
      heroFilter: ""
    },
    heroitem: {},
    herolist: {
      heroids: []
    },
    heroes: {
      authenticated: false
    }
  }
}

export const states = {
  _: (state: StoreState) => state.r,
  states: {
    _: (state: StoreState) => state.r.states,
    baseURL: (state: StoreState) => state.r.states.baseURL,
  },
  componentstates: {
    _: (state: StoreState) => state.r.componentstates,
    heroeditor: {
      _: (state: StoreState) => state.r.componentstates.heroeditor,
      createMode: (state: StoreState) => state.r.componentstates.heroeditor.createMode,
      selectedHeroId: (state: StoreState) => state.r.componentstates.heroeditor.selectedHeroId,
      selectedHeroName: (state: StoreState) => state.r.componentstates.heroeditor.selectedHeroName,
      show: (state: StoreState) => state.r.componentstates.heroeditor.show,
    },
    herofilter: {
      _: (state: StoreState) => state.r.componentstates.herofilter,
      heroFilter: (state: StoreState) => state.r.componentstates.herofilter.heroFilter,
    },
    heroitem: {
      _: (n: IdType) => (state: StoreState) => state.r.componentstates.heroitem[n],
    },
    herolist: {
      _: (state: StoreState) => state.r.componentstates.herolist,
      heroids: (state: StoreState) => state.r.componentstates.herolist.heroids,
    },
    heroes: {
      _: (state: StoreState) => state.r.componentstates.heroes,
      authenticated: (state: StoreState) => state.r.componentstates.heroes.authenticated,
    }
  }
}

export const repository = createReducer(
  initialState,
  on(modifyHero, modifyHeroTransition),
  on(showEditor, showEditorTransition),
  on(setHeroFilter, setHeroFilterTransition),
  on(setSelectedHero, setSelectedHeroTransition),
  on(storeConfig, storeConfigTransition),
  on(storeHero, storeHeroTransition),
  on(setAuthenticated, setAuthenticatedTransition),
  on(clearSelectedHero, clearSelectedHeroTransition),
);

