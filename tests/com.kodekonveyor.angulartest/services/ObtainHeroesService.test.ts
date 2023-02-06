import { any, mock } from "jest-mock-extended";
import { HttpClient } from "@angular/common/http";
import { User } from "@auth0/auth0-angular";
import { ObtainHeroesService } from "src/com.kodekonveyor.angulartest/services/ObtainHeroesService";
import { UrlMapConstants } from "src/com.kodekonveyor.angulartest/services/UrlMapConstants";
import { Observable } from "rxjs";
import { Heroes } from "src/com.kodekonveyor.angulartest/types/Heroes";
import { StoreHeroesService } from "src/com.kodekonveyor.angulartest/services/StoreHeroesService";
import { GenericErrorHandlerService } from "src/com.kodekonveyor.common/GenericErrorHandlerService";

describe("Obtain heroes", () => {

  const httpClient = mock<HttpClient>();
  const heroes$ = mock<Observable<Heroes>>();
  httpClient.get.calledWith(any()).mockReturnValue(heroes$)
  const baseURL = mock<String>();
  baseURL.concat.calledWith(any()).mockReturnValue("API ENDPOINT")
  const storeHeroesService = mock<StoreHeroesService>()
  const genericErrorHandlerService = mock<GenericErrorHandlerService>();

  const sut = new ObtainHeroesService(httpClient, storeHeroesService, genericErrorHandlerService);

  const user = mock(User);



  test("the hero list api endpoint url is computed using the api base URL and the endpoint url", () => {
    sut.run(user, baseURL);
    expect(baseURL?.concat).toBeCalledWith(UrlMapConstants.GET_HEROES_URL);
  });

  test("the hero list api endpoint url is called", () => {
    sut.run(user, baseURL);
    expect(httpClient.get).toBeCalledWith("API ENDPOINT");
  });

  test("the result of the api endpoint url is subscribed to with storeHeroesService", () => {
    sut.run(user, baseURL);
    const callarg = heroes$.subscribe.mock.calls[0][0]
    expect(callarg).toHaveProperty('next', storeHeroesService.run)
  });

  test("Errors in communication are handled with the generic error handler", () => {
    sut.run(user, baseURL);
    const callarg = heroes$.subscribe.mock.calls[0][0]
    expect(callarg).toHaveProperty('error', genericErrorHandlerService.run)
  });

});

