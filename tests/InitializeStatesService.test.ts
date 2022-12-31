import { mock } from "jest-mock-extended";
import { GetTheActualListOfHeroesService } from "src/services/GetTheActualListOfHeroesService";
import { InitializeStatesService } from "src/services/InitializeStatesService";

describe("Initialize states", () => {
    test("gets the actual list of heroes", () => {
        const getTheActualListOfHeroesService = mock<GetTheActualListOfHeroesService>();
        const sut = new InitializeStatesService(getTheActualListOfHeroesService);
        sut.run(getTheActualListOfHeroesService);
        expect(getTheActualListOfHeroesService.run).toBeCalled();
    });
});