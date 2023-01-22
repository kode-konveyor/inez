import { SelectHeroForEditingService } from "src/com.kodekonveyor.angulartest/services/SelectHeroForEditingService";
import { HERO, HERO_OTHER } from "./testdata/HeroTestData";

describe("Select hero for editing", () => {

  let sut: SelectHeroForEditingService;

  beforeEach(() => {
  });
  test("The selected hero will be the hero from the heroitem", () => {
    sut.run(HERO);
    expect(HERO_OTHER).toBe(HERO)
  });
});
