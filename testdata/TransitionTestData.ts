import { type AppState } from 'src/inez/types/AppState';

import { MakeTestDataService } from '@kodekonveyor/cdd-ts';
import { type TestDataDescriptor } from '@kodekonveyor/cdd-ts/dist/src/types/TestDataDescriptor';
import { SelbriTestData } from './SelbriTestData';
import { UrlTestData } from './UrlTestData';
import { SelbriEditorTestdata } from './SelbriEditorTestdata';
import { initialState } from 'src/inez/states/initialState';

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
        '1': {
          selbri: SelbriTestData.withId(),
          selected: false,
        },
        '2': {
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
      commandline: {
        line: 'foo',
        messageIDs: ['1'],
      },
      userMessages: {
        '1': {
          id: '1',
          kind: '',
          message: 'foo message',
          subject: 'some subject',
        },
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
      draft.componentstates.selbriitem[SelbriTestData.withId().id] = {
        selbri: SelbriTestData.withId(),
        selected: false,
      };
      draft.componentstates.selbrilist.selbriids.push(
        SelbriTestData.withId().id
      );
    },
  },

  nonInitialStateSelbriStored: {
    __from: 'nonInitialState',
    __transform: (draft: AppState) => {
      draft.componentstates.selbriitem[SelbriTestData.withId().id] = {
        selbri: SelbriTestData.withId(),
        selected: true,
      };
      draft.componentstates.selbrilist.selbriids.push(
        SelbriTestData.withId().id
      );
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
      draft.componentstates.selbriitem['1'].selbri = SelbriTestData.modified();
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
      draft.componentstates.selbriitem[SelbriTestData.withId().id].selected =
        true;
      draft.componentstates.selbriitem[SelbriTestData.another().id].selected =
        false;
    },
  },
  initialStateWithCommand: {
    __from: 'initialState',
    __transform: (draft: AppState) => {
      draft.componentstates.commandline.line = 'have command';
    },
  },
  initialStateWithMessageStored: {
    __from: 'initialState',
    __transform: (draft: AppState) => {
      draft.componentstates.userMessages = {
        '0': { id: '0', kind: 'error', message: 'message', subject: 'subject' },
      };
      draft.componentstates.commandline.messageIDs = ['0'];
    },
  },
} satisfies TestDataDescriptor<AppState>;

export const TransitionTestData = new MakeTestDataService<
  AppState,
  typeof TransitionTestDataDescriptor
>().makeTestData(TransitionTestDataDescriptor);
