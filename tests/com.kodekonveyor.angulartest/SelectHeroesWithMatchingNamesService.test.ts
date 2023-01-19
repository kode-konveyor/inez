import { HeroFilterRepository } from "src/com.kodekonveyor.angulartest/repositories/HeroFilterRepository";
import { HEROES, HEROES_WITHOUT_E, HEROES_WITH_E } from "src/legacy/mock-heroes";
import { SelectHeroesWithMatchingNamesService } from "src/com.kodekonveyor.angulartest/services/SelectHeroesWithMatchingNamesService";


describe("Select heroes with matching name", () => {
  let heroFilterRepository: HeroFilterRepository;
  let sut: SelectHeroesWithMatchingNamesService;

  beforeEach(() => {
    heroFilterRepository = new HeroFilterRepository();
    sut = new SelectHeroesWithMatchingNamesService(heroFilterRepository)
  });

  test("we can filter all heroes with 'e' in name", () => {
    heroFilterRepository.heroFilter.filterString = "e";
    expect(sut.run(HEROES)).toEqual(HEROES_WITH_E);
  });
  test("we can filter all heroes without 'e' in name", () => {

    heroFilterRepository.heroFilter.filterString = "^[^e]*$";
    expect(sut.run(HEROES)).toEqual(HEROES_WITHOUT_E);
  });
});
