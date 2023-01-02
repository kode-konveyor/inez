import { mock } from "jest-mock-extended";
import { GetTheActualListOfHeroesService } from "src/com.kodekonveyor.angulartest/services/GetTheActualListOfHeroesService";
import { InitializeStatesService } from "src/com.kodekonveyor.angulartest/services/InitializeStatesService";

describe("Initialize states", () => {
  let getTheActualListOfHeroesService: GetTheActualListOfHeroesService;
  let sut: InitializeStatesService;
  beforeEach(() => {
    getTheActualListOfHeroesService = mock<GetTheActualListOfHeroesService>();
    sut = new InitializeStatesService(getTheActualListOfHeroesService);
  });

  test("gets the actual list of heroes", () => {
    sut.run(getTheActualListOfHeroesService);
    expect(getTheActualListOfHeroesService.run).toBeCalled();
  });
});
