import { type AppState } from 'src/com.kodekonveyor.angulartest/types/AppState';

import { MakeTestDataService } from 'cdd-ts';
import { HEROITEM_ID_PREFIX } from 'src/com.kodekonveyor.angulartest/transitions/TransitionConstants';
import { type TestDataDescriptor } from 'cdd-ts/dist/src/types/TestDataDescriptor';
import { HeroTestData } from './HeroTestData';
import { UrlTestData } from './UrlTestData';
import { HeroEditorTestdata } from './HeroEditorTestdata';
import { initialState } from 'src/com.kodekonveyor.angulartest/states/initialState';

export const TransitionTestDataDescriptor = {
  initialState,

  nonInitialState: {
    states: {
      baseURL: UrlTestData.baseUrl(),
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
      draft.states.baseURL = UrlTestData.baseUrl();
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
