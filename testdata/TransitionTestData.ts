import { initialState } from 'src/com.kodekonveyor.angulartest/repositories/Repository';
import { type AppState } from 'src/com.kodekonveyor.angulartest/types/AppState';

import { MakeTestDataService } from 'cdd-ts';
import { HEROITEM_ID_PREFIX } from 'src/com.kodekonveyor.angulartest/transitions/TransitionConstants';
import { type TestDataDescriptor } from 'cdd-ts/dist/src/types/TestDataDescriptor';
import { baseUrl, HeroTestData } from './TestData';

const HeroEditorTestdata = {
  changed: {
    createMode: true,
    show: true,
    selectedHeroId: 'foo',
    selectedHeroName: 'bar',
  },

  heroSelected: {
    createMode: false,
    show: true,
    selectedHeroId: HeroTestData.withId().id,
    selectedHeroName: HeroTestData.withId().name,
  },
  nonInitialState: {
    createMode: true,
    show: true,
    selectedHeroId: '1',
    selectedHeroName: 'negynegynegy',
  },
  initialState: {
    createMode: false,
    show: false,
    selectedHeroId: '',
    selectedHeroName: '',
  },
  shown: {
    createMode: true,
    show: true,
    selectedHeroId: '',
    selectedHeroName: '',
  },
};

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export const TransitionTestDataDescriptor = {
  initialState,

  nonInitialState: {
    states: {
      baseURL: baseUrl,
    },
    componentstates: {
      heroeditor: HeroEditorTestdata.nonInitialState,
      herofilter: {
        heroFilter: '^T',
      },
      heroitem: {
        heroitem_1: {
          hero: HeroTestData.withId(),
          selected: false,
        },
        heroitem_2: {
          hero: HeroTestData.another(),
          selected: true,
        },
      },
      herolist: {
        heroids: ['1'],
      },
      heroes: {
        authenticated: true,
      },
    },
  },

  initialStateConfigured: {
    __from: 'initialState',
    __transform: (draft: AppState) => {
      draft.states.baseURL = baseUrl;
    },
  },

  initialStateHeroEditorChanged: {
    __from: 'initialState',
    __transform: (draft: AppState) => {
      draft.componentstates.heroeditor = HeroEditorTestdata.changed;
    },
  },

  initialStateHeroStored: {
    __from: 'initialState',
    __transform: (draft: AppState) => {
      draft.componentstates.heroitem[
        HEROITEM_ID_PREFIX + HeroTestData.withId().id
      ] = {
        hero: HeroTestData.withId(),
        selected: false,
      };
      draft.componentstates.herolist.heroids.push(HeroTestData.withId().id);
    },
  },

  nonInitialStateHeroStored: {
    __from: 'nonInitialState',
    __transform: (draft: AppState) => {
      draft.componentstates.heroitem[
        HEROITEM_ID_PREFIX + HeroTestData.withId().id
      ] = {
        hero: HeroTestData.withId(),
        selected: true,
      };
      draft.componentstates.herolist.heroids.push(HeroTestData.withId().id);
    },
  },
  nonInitialStateHeroEditorReset: {
    __from: 'nonInitialState',
    __transform: (draft: AppState) => {
      draft.componentstates.heroeditor = HeroEditorTestdata.initialState;
    },
  },

  nonInitialStateHeroModified: {
    __from: 'nonInitialState',
    __transform: (draft: AppState) => {
      // eslint-disable-next-line @typescript-eslint/dot-notation
      draft.componentstates.heroitem['heroitem_1'].hero =
        HeroTestData.modified();
    },
  },

  initalStateAuthenticated: {
    __from: 'initialState',
    __transform: (draft: AppState) => {
      draft.componentstates.heroes.authenticated = true;
    },
  },

  nonInitalStateAuthenticated: {
    __from: 'nonInitialState',
    __transform: (draft: AppState) => {
      draft.componentstates.heroes.authenticated = true;
    },
  },

  initialStateHerofilterE: {
    __from: 'initialState',
    __transform: (draft: AppState) => {
      draft.componentstates.herofilter.heroFilter = 'e';
    },
  },

  nonInitialStateHerofilterE: {
    __from: 'nonInitialState',
    __transform: (draft: AppState) => {
      draft.componentstates.herofilter.heroFilter = 'e';
    },
  },

  initialStateSelectedHero: {
    __from: 'initialState',
    __transform: (draft: AppState) => {
      draft.componentstates.heroeditor = HeroEditorTestdata.heroSelected;
    },
  },

  nonInitialStateHeroEditorShown: {
    __from: 'nonInitialState',
    __transform: (draft: AppState) => {
      draft.componentstates.heroeditor = HeroEditorTestdata.shown;
    },
  },

  nonInitialStateSelectedHero: {
    __from: 'nonInitialState',
    __transform: (draft: AppState) => {
      draft.componentstates.heroeditor = HeroEditorTestdata.heroSelected;
      draft.componentstates.heroitem[
        HEROITEM_ID_PREFIX + HeroTestData.withId().id
      ].selected = true;
      draft.componentstates.heroitem[
        HEROITEM_ID_PREFIX + HeroTestData.another().id
      ].selected = false;
    },
  },
} satisfies TestDataDescriptor<AppState>;

export const TransitionTestData = new MakeTestDataService<
  AppState,
  typeof TransitionTestDataDescriptor
>().makeTestData(TransitionTestDataDescriptor);
