import { HttpClient } from "@angular/common/http/index";
import { User } from "@auth0/auth0-angular";
import { Observable } from "rxjs";
import { changeUser } from "../src/com.kodekonveyor.angulartest/repositories/actions";
import { ObtainHeroesService, ObtainHeroesServiceType } from "../src/com.kodekonveyor.angulartest/services/ObtainHeroesService";
import { UrlMapConstants } from "../src/com.kodekonveyor.angulartest/services/UrlMapConstants";
import { Heroes } from "../src/com.kodekonveyor.angulartest/types/Heroes";
import { ServicesTestData } from "../tests/com.kodekonveyor.angulartest/testdata/ServicesTestData";
import { Contract } from "cdd-ts/dist/src/contract/Contract"

console.log("a")
const ret:Observable<Heroes> = new Observable()

type GetType = typeof HttpClient.prototype.get

function getUrl(): string {
    return ("BASE_URL" + UrlMapConstants.GET_HEROES_URL);
}
console.log("b")

const HttpClientGetContract = new Contract<GetType>()
    .setTitle("get method of Angular http client")
    .ifCalledWith(getUrl)
    .thenReturn("For the URL of heroes endpoint, returns an observable of the heroes", () => ret);

export const httpClient = ({
    get: HttpClientGetContract.getStub()
} as unknown) as HttpClient

const user:User = {

}
const changeUserAction = changeUser({ payload: user })

export const ObtainHeroesServiceContractParties = [new ObtainHeroesService(httpClient).run]

export const ObtainHeroesServiceContract = new Contract<ObtainHeroesServiceType>()
    .setTitle("Obtain heroes service")
    .ifCalledWith(() => changeUserAction, () => ServicesTestData.storeConfigAction)
    .thenReturn("returns a Heroes observable", () => ret)
