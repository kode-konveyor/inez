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
    selbrieditor: {
      _: (state: StoreState) => state.r.componentstates.selbrieditor,
      createMode: (state: StoreState) =>
        state.r.componentstates.selbrieditor.createMode,
      selectedSelbriId: (state: StoreState) =>
        state.r.componentstates.selbrieditor.selectedSelbriId,
      selectedSelbriName: (state: StoreState) =>
        state.r.componentstates.selbrieditor.selectedSelbriName,
      show: (state: StoreState) => state.r.componentstates.selbrieditor.show,
    },
    selbrifilter: {
      _: (state: StoreState) => state.r.componentstates.selbrifilter,
      selbriFilter: (state: StoreState) =>
        state.r.componentstates.selbrifilter.selbriFilter,
    },
    selbriitem: {
      _: (n: IdType) => (state: StoreState) =>
        state.r.componentstates.selbriitem[n],
    },
    selbrilist: {
      _: (state: StoreState) => state.r.componentstates.selbrilist,
      selbriids: (state: StoreState) => state.r.componentstates.selbrilist.selbriids,
    },
    selbris: {
      _: (state: StoreState) => state.r.componentstates.selbris,
      authenticated: (state: StoreState) =>
        state.r.componentstates.selbris.authenticated,
    },
  },
};
