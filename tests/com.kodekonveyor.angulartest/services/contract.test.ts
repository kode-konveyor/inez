import { httpClient, ObtainHeroesServiceContract } from "../../../contracts/ObtainHeroesServiceContract";
import { ObtainHeroesService } from "../../../src/com.kodekonveyor.angulartest/services/ObtainHeroesService";


describe("Save Hero", () => {

    const sut = new ObtainHeroesService(httpClient);

    test("the api URl is computed from the base URL and the url of the endpoint.", () => {
        ObtainHeroesServiceContract.check(sut.run)
    });
}) 