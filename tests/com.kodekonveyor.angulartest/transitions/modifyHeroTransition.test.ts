import { TransitionTestData } from "../testdata/TransitionTestData";
import { modifyHeroTransition } from "src/com.kodekonveyor.angulartest/transitions/modifyHeroTransition";
import { modifyHero } from "src/com.kodekonveyor.angulartest/repositories/actions";
import { HERO_MODIFIED } from "../testdata/HeroTestData";
import { HEROITEM_ID_PREFIX } from "src/com.kodekonveyor.angulartest/transitions/TransitionConstants";
import { initialState } from "src/com.kodekonveyor.angulartest/repositories/Repository";

describe("Modify Hero", () => {

  test("if there is no item for the hero, the modification will be silently ignored", () => {
    const result = modifyHeroTransition(TransitionTestData.initialState, modifyHero({ payload: HERO_MODIFIED }));
    expect(result).toEqual(initialState)
  });

  test("the hero for the heroitem will be the modified hero", () => {
    const result = modifyHeroTransition(TransitionTestData.nonInitialState, modifyHero({ payload: HERO_MODIFIED }));
    expect(result.componentstates.heroitem[HEROITEM_ID_PREFIX + HERO_MODIFIED.id].hero).toEqual(HERO_MODIFIED)
  });
})

