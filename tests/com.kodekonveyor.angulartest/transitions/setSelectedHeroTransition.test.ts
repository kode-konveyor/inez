import { TransitionTestData } from "../testdata/TransitionTestData";
import { setSelectedHero } from "src/com.kodekonveyor.angulartest/repositories/actions";
import { setSelectedHeroTransition } from "src/com.kodekonveyor.angulartest/transitions/setSelectedHeroTransition";
import { HERO } from "../testdata/HeroTestData";

describe("Set selected hero", () => {

  test("the heroId and heroName property of heroeditor is set to the value of the action, and the selected properties of each heroitems are set accordingly (test from initial state)", () => {
    const result = setSelectedHeroTransition(TransitionTestData.initialState, setSelectedHero({ payload: HERO }));
    expect(result).toEqual(TransitionTestData.initialState_selected_hero_is_HERO)
  });

  test("the heroId and heroName property of heroeditor is set to the value of the action, and the selected properties of each heroitems are set accordingly (test from noninitial state)", () => {
    const result = setSelectedHeroTransition(TransitionTestData.nonInitialState, setSelectedHero({ payload: HERO }));
    expect(result).toEqual(TransitionTestData.nonInitialState_selected_hero_is_HERO)
  });

})

