import { HeroItemComponentModel } from "src/app/heroitem/HeroItemComponentModel";
import { SelectedHeroRepository } from "src/app/repositories/SelectedHeroRepository";
import { SelectHeroForEditingService } from "src/com.kodekonveyor.angulartest/services/SelectHeroForEditingService";
import { HERO, HERO_OTHER } from "./testdata/HeroTestData";

describe("Select hero for editing", () => {
  let selectedHeroRepository: SelectedHeroRepository;

  let sut: SelectHeroForEditingService;

  let heroItemComponentModel: HeroItemComponentModel;
  beforeEach(() => {
    selectedHeroRepository = new SelectedHeroRepository();
    selectedHeroRepository.selectedHero = HERO_OTHER;
    sut = new SelectHeroForEditingService(selectedHeroRepository)
  });
  test("The selected hero will be the hero from the heroitem", () => {
    heroItemComponentModel = { hero: HERO };
    sut.run(heroItemComponentModel);
    expect(selectedHeroRepository.selectedHero).toBe(HERO)
  });
});
