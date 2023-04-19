import { produce } from 'immer';
import { initialState } from 'src/com.kodekonveyor.angulartest/repositories/Repository';
import { HEROITEM_ID_PREFIX } from 'src/com.kodekonveyor.angulartest/transitions/TransitionConstants';
import { type AppState } from 'src/com.kodekonveyor.angulartest/types/AppState';
import { HERO, HERO_OTHER } from './HeroTestData';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TransitionTestData {
  public static initialState = initialState;

  public static readonly baseUrl = 'BASE_URL';

  public static nonInitialState: AppState = {
    states: {
      baseURL: TransitionTestData.baseUrl,
    },
    componentstates: {
      heroeditor: {
        createMode: true,
        show: true,
        selectedHeroId: '1',
        selectedHeroName: 'negynegynegy',
      },
      herofilter: {
        heroFilter: '^T',
      },
      heroitem: {
        heroitem_1: {
          hero: HERO,
          selected: false,
        },
        heroitem_2: {
          hero: HERO_OTHER,
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
  };

  public static heroeditor_changed = {
    createMode: true,
    show: true,
    selectedHeroId: 'foo',
    selectedHeroName: 'bar',
  };

  public static initialState_with_heroeditor_changed = produce(
    initialState,
    (draft) => {
      draft.componentstates.heroeditor = this.heroeditor_changed;
    }
  );

  public static nonInitialState_with_heroeditor_reset = produce(
    this.nonInitialState,
    (draft) => {
      draft.componentstates.heroeditor =
        initialState.componentstates.heroeditor;
    }
  );

  public static initialState_authenticated = produce(initialState, (draft) => {
    draft.componentstates.heroes.authenticated = true;
  });

  public static nonInitialState_authenticated = produce(
    this.nonInitialState,
    (draft) => {
      draft.componentstates.heroes.authenticated = true;
    }
  );

  public static initialState_herofilter_e = produce(
    this.initialState,
    (draft) => {
      draft.componentstates.herofilter.heroFilter = 'e';
    }
  );

  public static nonInitialState_herofilter_e = produce(
    this.nonInitialState,
    (draft) => {
      draft.componentstates.herofilter.heroFilter = 'e';
    }
  );

  public static heroeditor_with_HERO_selected = {
    createMode: false,
    show: true,
    selectedHeroId: HERO.id,
    selectedHeroName: HERO.name,
  };

  public static initialState_selected_hero_is_HERO = produce(
    this.initialState,
    (draft) => {
      draft.componentstates.heroeditor = this.heroeditor_with_HERO_selected;
    }
  );

  public static nonInitialState_selected_hero_is_HERO = produce(
    this.nonInitialState,
    (draft) => {
      draft.componentstates.heroeditor = this.heroeditor_with_HERO_selected;
      draft.componentstates.heroitem[
        HEROITEM_ID_PREFIX + HERO.id.toString()
      ].selected = true;
      draft.componentstates.heroitem[
        HEROITEM_ID_PREFIX + HERO_OTHER.id.toString()
      ].selected = false;
    }
  );

  public static HEROITEM = {
    hero: HERO,
    selected: false,
  };
}
