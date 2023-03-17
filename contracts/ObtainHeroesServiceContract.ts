import { HttpClient } from "@angular/common/http";
import { User } from "@auth0/auth0-angular";
import { Contract } from "cdd-ts";
import { mock } from "jest-mock-extended";
import { Observable } from "rxjs";
import { changeUser } from "../src/com.kodekonveyor.angulartest/repositories/actions";
import { ObtainHeroesServiceType } from "../src/com.kodekonveyor.angulartest/services/ObtainHeroesService";
import { UrlMapConstants } from "../src/com.kodekonveyor.angulartest/services/UrlMapConstants";
import { Heroes } from "../src/com.kodekonveyor.angulartest/types/Heroes";
import { ServicesTestData } from "../tests/com.kodekonveyor.angulartest/testdata/ServicesTestData";

const ret = mock<Observable<Heroes>>();
type GetType = typeof HttpClient.prototype.get

function getUrl():string {
    return ("BASE_URL" + UrlMapConstants.GET_HEROES_URL);
}

const HttpClientGetContract = new Contract<GetType>()
    .setTitle("get method of Angular http client")
    .ifCalledWith(getUrl)
    .thenReturn("For the URL of heroes endpoint, returns an observable of the heroes", () => ret);

export const httpClient: HttpClient = mock<HttpClient>();
httpClient.get = HttpClientGetContract.getStub()

const user = mock<User>()
const changeUserAction = changeUser({ payload: user })


export const ObtainHeroesServiceContract = new Contract<ObtainHeroesServiceType>()
    .setTitle("Obtain heroes service")
    .ifCalledWith(() => changeUserAction, () => ServicesTestData.storeConfigAction)
    .thenReturn("returns a Heroes observable", () => ret)
