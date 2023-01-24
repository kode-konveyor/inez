import { isThisHeroSelectedForEditingFilter } from "src/com.kodekonveyor.angulartest/operators/IsThisHeroSelectedForEditingFilter";
import { HERO, HERO_OTHER } from "./testdata/HeroTestData";

describe("Is this hero selected for editing?", () => {
  const sut = isThisHeroSelectedForEditingFilter
  beforeEach(() => { });
  test("True if the selected hero is the hero we are looking at", () => {
    expect(sut([HERO, HERO])).toBe(true);
  });
  test("False if the selected hero is not the hero we are looking at", () => {
    expect(sut([HERO, HERO_OTHER])).toBe(false);
  });
});
