import { HttpClient } from "@angular/common/http/index";
import { User } from "@auth0/auth0-angular";
import { mock, mockFn } from "jest-mock-extended";
import { Observable, isEmpty } from "rxjs";
import { changeUser } from "../../../src/com.kodekonveyor.angulartest/repositories/actions";
import { ObtainHeroesService } from "../../../src/com.kodekonveyor.angulartest/services/ObtainHeroesService";
import { UrlMapConstants } from "../../../src/com.kodekonveyor.angulartest/services/UrlMapConstants";
import { Heroes } from "../../../src/com.kodekonveyor.angulartest/types/Heroes";
import { ServicesTestData } from "../testdata/ServicesTestData";

describe("Save Hero", () => {

  const httpClient: HttpClient = mock<HttpClient>();
  const get = mockFn();
  httpClient.get = get;
  const ret = mock<Observable<Heroes>>();
  get.mockReturnValue(ret);
  const sut = new ObtainHeroesService(httpClient);
  const user = mock<User>()
  const changeUserAction = changeUser({ payload: user })

  test("the api URl is computed from the base URL and the url of the endpoint.", () => {
    sut.run(changeUserAction, ServicesTestData.storeConfigAction);
    expect(get.mock.calls[0][0]).toBe("BASE_URL" + UrlMapConstants.GET_HEROES_URL)
  });

  test("Returns the result from the API", () => {
    expect(sut.run(changeUserAction, ServicesTestData.storeConfigAction)).toBe(ret)
  });

  test("Does not call the API if there is no authenticated user", (done) => {
    const result = sut.run(changeUser({ payload: null }), ServicesTestData.storeConfigAction);
    result.pipe(isEmpty()).subscribe((res) => {
      expect(res).toEqual(true)
      done()
    });
  });

})

