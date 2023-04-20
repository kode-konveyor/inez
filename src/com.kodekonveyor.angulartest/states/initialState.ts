import { type AppState } from '../types/AppState';

export const initialState: AppState = {
  states: {
    baseURL: '',
  },
  componentstates: {
    heroeditor: {
      createMode: false,
      show: false,
      selectedHeroId: '',
      selectedHeroName: '',
    },
    herofilter: {
      heroFilter: '',
    },
    heroitem: {},
    herolist: {
      heroids: [],
    },
    heroes: {
      authenticated: false,
    },
  },
};
