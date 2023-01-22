import { HeroItemComponentModel } from "src/com.kodekonveyor.angulartest/UI/heroitem/HeroItemComponentModel";
import { SelectedHeroRepository } from "src/com.kodekonveyor.angulartest/repositories/SelectedHeroRepository";
import { isThisHeroSelectedForEditingFilter } from "src/com.kodekonveyor.angulartest/filters/IsThisHeroSelectedForEditingFilter";
import { HERO, HERO_OTHER } from "./testdata/HeroTestData";

describe("Is this hero selected for editing?", () => {
  let selectedHeroRepository: SelectedHeroRepository;

  let sut: IsThisHeroSelectedForEditingFilter;

  let heroItemComponentModel: HeroItemComponentModel;

  beforeEach(() => {
    selectedHeroRepository = new SelectedHeroRepository();
    selectedHeroRepository.selectedHero = HERO
    sut = new isThisHeroSelectedForEditingFilter(selectedHeroRepository)
  });
  test("True if the selected hero is the hero we are looking at", () => {
    heroItemComponentModel = { hero: HERO };
    expect(sut.run(heroItemComponentModel)).toBe(true);
  });
  test("False if the selected hero is not the hero we are looking at", () => {
    heroItemComponentModel = { hero: HERO_OTHER };
    expect(sut.run(heroItemComponentModel)).toBe(false);
  });
});
