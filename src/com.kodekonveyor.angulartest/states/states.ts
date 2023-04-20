import { type IdType } from 'src/com.kodekonveyor.common/IdType';
import { type StoreState } from '../types/StoreState';

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
      createMode: (state: StoreState) =>
        state.r.componentstates.heroeditor.createMode,
      selectedHeroId: (state: StoreState) =>
        state.r.componentstates.heroeditor.selectedHeroId,
      selectedHeroName: (state: StoreState) =>
        state.r.componentstates.heroeditor.selectedHeroName,
      show: (state: StoreState) => state.r.componentstates.heroeditor.show,
    },
    herofilter: {
      _: (state: StoreState) => state.r.componentstates.herofilter,
      heroFilter: (state: StoreState) =>
        state.r.componentstates.herofilter.heroFilter,
    },
    heroitem: {
      _: (n: IdType) => (state: StoreState) =>
        state.r.componentstates.heroitem[n],
    },
    herolist: {
      _: (state: StoreState) => state.r.componentstates.herolist,
      heroids: (state: StoreState) => state.r.componentstates.herolist.heroids,
    },
    heroes: {
      _: (state: StoreState) => state.r.componentstates.heroes,
      authenticated: (state: StoreState) =>
        state.r.componentstates.heroes.authenticated,
    },
  },
};
