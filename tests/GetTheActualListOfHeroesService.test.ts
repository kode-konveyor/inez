import { HeroesRepository } from "src/app/repositories/HeroesRepository";
import { GetTheActualListOfHeroesService } from "src/services/GetTheActualListOfHeroesService";

describe("Get the actual list of heroes", () => {
  let heroesRepository: HeroesRepository;
  let sut: GetTheActualListOfHeroesService;

  beforeEach(() => {
    heroesRepository = new HeroesRepository();
    sut = new GetTheActualListOfHeroesService(heroesRepository)
  });
  test("we actually load a hero", () => {
    sut.run();
    expect(heroesRepository.heroes[0].id).toBe(12);
  });
});
