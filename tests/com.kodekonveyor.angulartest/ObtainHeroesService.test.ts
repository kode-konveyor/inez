import { any, DeepMockProxy, mock, mockDeep } from "jest-mock-extended";
import { HttpClient } from "@angular/common/http";
import { Synchronizer } from "src/com.kodekonveyor.angulartest/services/Synchronizer";
import { AuthService, User } from "@auth0/auth0-angular";
import { ObtainHeroesService } from "src/com.kodekonveyor.angulartest/services/ObtainHeroesService";
import { Store } from "@ngrx/store";
import { AppState } from "src/com.kodekonveyor.angulartest/types/AppState";
import { UrlMapConstants } from "src/com.kodekonveyor.angulartest/services/UrlMapConstants";
import { Observable } from "rxjs";
import { Heroes } from "src/com.kodekonveyor.angulartest/types/Heroes";
import { HEROES } from "src/legacy/mock-heroes";
import { subscriberFeed } from "../helpers/subscriberFeed";

describe("Obtain heroes", () => {

  const auth: DeepMockProxy<AuthService> = mockDeep<AuthService>();
  const httpClient: DeepMockProxy<HttpClient> = mockDeep<HttpClient>();
  const synchronizer = mock<Synchronizer>();
  const store: Store<AppState> = mock<Store<AppState>>();

  subscriberFeed(auth.user$, mock<User>())

  const heroes$ = mockDeep<Observable<Heroes>>();
  httpClient.get.calledWith(any()).mockReturnValue(heroes$)

  subscriberFeed(heroes$, HEROES)

  const baseURL: DeepMockProxy<String> = mockDeep<String>();
  baseURL.concat.calledWith(any()).mockReturnValue("API ENDPOINT")

  const sut = new ObtainHeroesService(auth, httpClient, synchronizer, store);
  sut.baseURL = baseURL;

  sut.run();


  test("the user is observed", () => {
    expect(auth.user$.subscribe).toBeCalled()
  });

  test("the hero list api endpoint url is computed using the api base URL and the endpoint url", () => {
    expect(sut.baseURL?.concat).toBeCalledWith(UrlMapConstants.GET_HEROES_URL);
  });

  test("the hero list api endpoint url is called", () => {
    expect(httpClient.get).toBeCalledWith("API ENDPOINT");
  });

  test("the result of the api endpoint url is subscribed to", () => {
    expect(heroes$.subscribe).toBeCalled()
  });

  test("for each hero the dispatcher is called", () => {
    expect(store.dispatch).toBeCalledWith(
      {
        "payload": HEROES[2],
        "type": "add Hero",
      }
    )
  });

});

