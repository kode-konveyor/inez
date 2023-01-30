import { isThisHeroSelectedForEditingOperator } from "src/com.kodekonveyor.angulartest/operators/IsThisHeroSelectedForEditingOperator";
import { States } from "src/com.kodekonveyor.angulartest/types/States";
import { HERO, HERO_OTHER } from "./testdata/HeroTestData";

const STATES_WITH_HERO: States = { selectedHero: HERO, createMode: false, heroFilter: "", baseURL: "" }
const STATES_WITH_OTHER_HERO: States = { selectedHero: HERO_OTHER, createMode: false, heroFilter: "", baseURL: "" }

describe("Is this hero selected for editing?", () => {
  const sut = isThisHeroSelectedForEditingOperator
  beforeEach(() => { });
  test("True if the selected hero is the hero we are looking at", () => {
    expect(sut([HERO, STATES_WITH_HERO])).toBe(true);
  });
  test("False if the selected hero is not the hero we are looking at", () => {
    expect(sut([HERO, STATES_WITH_OTHER_HERO])).toBe(false);
  });
});
