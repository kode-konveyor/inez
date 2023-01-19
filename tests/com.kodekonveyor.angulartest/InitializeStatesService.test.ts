import { mock } from "jest-mock-extended";
import { of } from "rxjs";
import { GetTheActualListOfHeroesService } from "src/com.kodekonveyor.angulartest/services/GetTheActualListOfHeroesService";
import { InitializeStatesService } from "src/com.kodekonveyor.angulartest/services/InitializeStatesService";
import { HEROES } from "src/legacy/mock-heroes";

describe("Initialize states", () => {
  let getTheActualListOfHeroesService: GetTheActualListOfHeroesService;
  let sut: InitializeStatesService;
  beforeEach(() => {
    getTheActualListOfHeroesService = mock<GetTheActualListOfHeroesService>();
    sut = new InitializeStatesService(getTheActualListOfHeroesService);
  });

  test("gets the actual list of heroes", () => {
    sut.run({ heroes: of(HEROES) });
    expect(getTheActualListOfHeroesService.run).toBeCalled();
  });
});
