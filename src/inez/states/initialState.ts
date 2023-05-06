import { type AppState } from '../types/AppState';

export const initialState: AppState = {
  states: {
    baseURL: '',
  },
  componentstates: {
    selbrieditor: {
      createMode: false,
      show: false,
      selectedSelbriId: '',
      selectedSelbriName: '',
    },
    selbrifilter: {
      selbriFilter: '',
    },
    selbriitem: {},
    selbrilist: {
      selbriids: [],
    },
    selbris: {
      authenticated: false,
    },
    commandline: { line: '', messageIDs: [] },
    userMessages: [],
  },
};
