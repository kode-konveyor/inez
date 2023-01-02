import { HeroItemComponentModel } from "src/app/heroitem/HeroItemComponentModel";
import { SelectedHeroRepository } from "src/app/repositories/SelectedHeroRepository";
import { IsThisHeroSelectedForEditingService } from "src/com.kodekonveyor.angulartest/services/IsThisHeroSelectedForEditingService";
import { HERO, HERO_OTHER } from "./testdata/HeroTestData";

describe("Is this hero selected for editing?", () => {
  let selectedHeroRepository: SelectedHeroRepository;

  let sut: IsThisHeroSelectedForEditingService;

  let heroItemComponentModel: HeroItemComponentModel;

  beforeEach(() => {
    selectedHeroRepository = new SelectedHeroRepository();
    selectedHeroRepository.selectedHero = HERO
    sut = new IsThisHeroSelectedForEditingService(selectedHeroRepository)
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
