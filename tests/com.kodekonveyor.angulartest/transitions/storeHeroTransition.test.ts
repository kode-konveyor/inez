import { storeHero } from "src/com.kodekonveyor.angulartest/repositories/actions";
import { storeHeroTransition } from "src/com.kodekonveyor.angulartest/transitions/storeHeroTransition";
import { HEROITEM_ID_PREFIX } from "src/com.kodekonveyor.angulartest/transitions/TransitionConstants";
import { HERO } from "../testdata/HeroTestData";
import { TransitionTestData } from "../testdata/TransitionTestData";

describe("Store hero", () => {
  const result = storeHeroTransition(TransitionTestData.initialState, storeHero({ payload: HERO }));

  test("creates a heroitem for the hero", () => {
    expect(result.componentstates.heroitem[HEROITEM_ID_PREFIX + HERO.id]).toBeDefined()
  });

  test("the hero in the heroitem is the hero", () => {
    expect(result.componentstates.heroitem[HEROITEM_ID_PREFIX + HERO.id].hero).toEqual(HERO)
  });

  test("the selected state of the heroitem is true iff this hero is selected", () => {
    expect(result.componentstates.heroitem[HEROITEM_ID_PREFIX + HERO.id].selected).toEqual(false)
  });

  test("the selected state of the heroitem is true iff this hero is selected (from noninitial)", () => {
    const result = storeHeroTransition(TransitionTestData.nonInitialState, storeHero({ payload: HERO }));
    expect(result.componentstates.heroitem[HEROITEM_ID_PREFIX + HERO.id].selected).toEqual(true)
  });


})

