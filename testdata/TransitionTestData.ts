import { type AppState } from 'src/com.kodekonveyor.angulartest/types/AppState';

import { MakeTestDataService } from 'cdd-ts';
import { HEROITEM_ID_PREFIX } from 'src/com.kodekonveyor.angulartest/transitions/TransitionConstants';
import { type TestDataDescriptor } from 'cdd-ts/dist/src/types/TestDataDescriptor';
import { SelbriTestData } from './SelbriTestData';
import { UrlTestData } from './UrlTestData';
import { SelbriEditorTestdata } from './SelbriEditorTestdata';
import { initialState } from 'src/com.kodekonveyor.angulartest/states/initialState';

export const TransitionTestDataDescriptor = {
  initialState,

  nonInitialState: {
    states: {
      baseURL: UrlTestData.baseUrl(),
    },
    componentstates: {
      selbrieditor: SelbriEditorTestdata.nonInitialState,
      selbrifilter: {
        selbriFilter: '^T',
      },
      selbriitem: {
        selbriitem_1: {
          selbri: SelbriTestData.withId(),
          selected: false,
        },
        selbriitem_2: {
          selbri: SelbriTestData.another(),
          selected: true,
        },
      },
      selbrilist: {
        selbriids: ['1'],
      },
      selbris: {
        authenticated: true,
      },
    },
  },

  initialStateConfigured: {
    __from: 'initialState',
    __transform: (draft: AppState) => {
      draft.states.baseURL = UrlTestData.baseUrl();
    },
  },

  initialStateSelbriEditorChanged: {
    __from: 'initialState',
    __transform: (draft: AppState) => {
      draft.componentstates.selbrieditor = SelbriEditorTestdata.changed;
    },
  },

  initialStateSelbriStored: {
    __from: 'initialState',
    __transform: (draft: AppState) => {
      draft.componentstates.selbriitem[
        HEROITEM_ID_PREFIX + SelbriTestData.withId().id
      ] = {
        selbri: SelbriTestData.withId(),
        selected: false,
      };
      draft.componentstates.selbrilist.selbriids.push(SelbriTestData.withId().id);
    },
  },

  nonInitialStateSelbriStored: {
    __from: 'nonInitialState',
    __transform: (draft: AppState) => {
      draft.componentstates.selbriitem[
        HEROITEM_ID_PREFIX + SelbriTestData.withId().id
      ] = {
        selbri: SelbriTestData.withId(),
        selected: true,
      };
      draft.componentstates.selbrilist.selbriids.push(SelbriTestData.withId().id);
    },
  },
  nonInitialStateSelbriEditorReset: {
    __from: 'nonInitialState',
    __transform: (draft: AppState) => {
      draft.componentstates.selbrieditor = SelbriEditorTestdata.initialState;
    },
  },

  nonInitialStateSelbriModified: {
    __from: 'nonInitialState',
    __transform: (draft: AppState) => {
      // eslint-disable-next-line @typescript-eslint/dot-notation
      draft.componentstates.selbriitem['selbriitem_1'].selbri =
        SelbriTestData.modified();
    },
  },

  initalStateAuthenticated: {
    __from: 'initialState',
    __transform: (draft: AppState) => {
      draft.componentstates.selbris.authenticated = true;
    },
  },

  nonInitalStateAuthenticated: {
    __from: 'nonInitialState',
    __transform: (draft: AppState) => {
      draft.componentstates.selbris.authenticated = true;
    },
  },

  initialStateSelbrifilterE: {
    __from: 'initialState',
    __transform: (draft: AppState) => {
      draft.componentstates.selbrifilter.selbriFilter = 'e';
    },
  },

  nonInitialStateSelbrifilterE: {
    __from: 'nonInitialState',
    __transform: (draft: AppState) => {
      draft.componentstates.selbrifilter.selbriFilter = 'e';
    },
  },

  initialStateSelectedSelbri: {
    __from: 'initialState',
    __transform: (draft: AppState) => {
      draft.componentstates.selbrieditor = SelbriEditorTestdata.selbriSelected;
    },
  },

  nonInitialStateSelbriEditorShown: {
    __from: 'nonInitialState',
    __transform: (draft: AppState) => {
      draft.componentstates.selbrieditor = SelbriEditorTestdata.shown;
    },
  },

  nonInitialStateSelectedSelbri: {
    __from: 'nonInitialState',
    __transform: (draft: AppState) => {
      draft.componentstates.selbrieditor = SelbriEditorTestdata.selbriSelected;
      draft.componentstates.selbriitem[
        HEROITEM_ID_PREFIX + SelbriTestData.withId().id
      ].selected = true;
      draft.componentstates.selbriitem[
        HEROITEM_ID_PREFIX + SelbriTestData.another().id
      ].selected = false;
    },
  },
} satisfies TestDataDescriptor<AppState>;

export const TransitionTestData = new MakeTestDataService<
  AppState,
  typeof TransitionTestDataDescriptor
>().makeTestData(TransitionTestDataDescriptor);
