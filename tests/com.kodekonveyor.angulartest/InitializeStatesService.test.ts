import { mock, mockFn } from "jest-mock-extended";
import { Subject } from "rxjs";
import { GetTheActualListOfHeroesService } from "src/com.kodekonveyor.angulartest/services/GetTheActualListOfHeroesService";
import { InitializeStatesService } from "src/com.kodekonveyor.angulartest/services/InitializeStatesService";
import { ObtainUrlBaseService } from "src/com.kodekonveyor.angulartest/services/ObtainUrlBaseService";

describe("Initialize states", () => {
  let getTheActualListOfHeroesService: GetTheActualListOfHeroesService;
  let obtainUrlBaseService: ObtainUrlBaseService;
  let sut: InitializeStatesService;

  beforeEach(() => {
    getTheActualListOfHeroesService = mock<GetTheActualListOfHeroesService>();
    obtainUrlBaseService = mock<ObtainUrlBaseService>();
    const runMock = mockFn<ObtainUrlBaseService["run"]>();
    obtainUrlBaseService.run = runMock;
    runMock.mockReturnValue(mock<Subject<boolean>>())
    sut = new InitializeStatesService(
      getTheActualListOfHeroesService,
      obtainUrlBaseService
    );
  });

  test("gets the actual list of heroes", () => {
    sut.run();
    expect(obtainUrlBaseService.run).toBeCalled();
  });
});
