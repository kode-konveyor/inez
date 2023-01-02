import { HeroesRepository } from "src/com.kodekonveyor.angulartest/repositories/HeroesRepository";
import { HeroFilterRepository } from "src/com.kodekonveyor.angulartest/repositories/HeroFilterRepository";
import { HEROES, HEROES_WITHOUT_E, HEROES_WITH_E } from "src/legacy/mock-heroes";
import { SelectHeroesWithMatchingNamesService } from "src/com.kodekonveyor.angulartest/services/SelectHeroesWithMatchingNamesService";


describe("Select heroes with matching name", () => {
  let heroesRepository: HeroesRepository;
  let heroFilterRepository: HeroFilterRepository;
  let sut: SelectHeroesWithMatchingNamesService;

  beforeEach(() => {
    heroesRepository = new HeroesRepository();
    Array.prototype.push.apply(
      heroesRepository.heroes, HEROES);
    heroFilterRepository = new HeroFilterRepository();
    sut = new SelectHeroesWithMatchingNamesService(heroesRepository, heroFilterRepository)
  });

  test("we can filter all heroes with 'e' in name", () => {

    heroFilterRepository.heroFilter.filterString = "e";
    expect(sut.run()).toEqual(HEROES_WITH_E);
  });
  test("we can filter all heroes without 'e' in name", () => {

    heroFilterRepository.heroFilter.filterString = "^[^e]*$";
    expect(sut.run()).toEqual(HEROES_WITHOUT_E);
  });
});
