import { initialState } from "src/com.kodekonveyor.angulartest/repositories/Repository";
import { AppState } from "src/com.kodekonveyor.angulartest/types/AppState";
import { HERO } from "../testdata/HeroTestData";
import { HEROES } from "../testdata/mock-heroes";

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ServicesTestData {
  public static nonInitialState: AppState = {
    heroes: HEROES,
    states: {
      baseURL: "BASE_URL"
    },
    componentstates: {
      heroeditor: {
        createMode: true,
        show: true,
        selectedHeroId: "negy",
        selectedHeroName: "negynegynegy"
      },
      herofilter: {
        heroFilter: "kkk"
      },
      heroitem: {
        id_negy: {
          hero: HERO,
          selected: true
        }
      },
      herolist: {
        heroids: []
      },
      heroes: {
        authenticated: false
      }
    }
  }

  public static heroeditor_changed =
    {
      createMode: true,
      show: true,
      selectedHeroId: "foo",
      selectedHeroName: "bar"
    }

  public static initialState_with_heroeditor_changed = {
    ...initialState,
    componentstates: {
      ...initialState.componentstates,
      heroeditor: this.heroeditor_changed
    }
  }

  public static nonInitialState_with_heroeditor_reset = {
    ...this.nonInitialState,
    componentstates: {
      ...this.nonInitialState.componentstates,
      heroeditor: initialState.componentstates.heroeditor,
    }
  }

  public static createHeroAction = { type: "c", payload: "joe" }
  public static storeConfigAction = { type: "d", payload: { baseUrl: "BASE_URL" } }

}
