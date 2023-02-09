import { HttpClient } from "@angular/common/http";
import { SaveHeroService } from "src/com.kodekonveyor.angulartest/services/SaveHeroService";
import { mock, mockFn } from "jest-mock-extended";
import { UrlMapConstants } from "src/com.kodekonveyor.angulartest/services/UrlMapConstants";
import { Hero } from "src/com.kodekonveyor.angulartest/types/Hero";
import { Observable } from "rxjs";
import { ServicesTestData } from "../testdata/ServicesTestData";

describe("Save Hero", () => {

  const httpClient: HttpClient = mock<HttpClient>();
  const post = mockFn();
  httpClient.post = post;
  const ret = mock<Observable<Hero>>();
  post.mockReturnValue(ret);
  const sut = new SaveHeroService(httpClient);

  test("the api URl is computed from the base URL and the url of the endpoint.", () => {
    sut.run(ServicesTestData.createHeroAction, ServicesTestData.storeConfigAction);
    expect(post.mock.calls[0][0]).toBe("BASE_URL" + UrlMapConstants.ADD_HERO_URL)
  });

  test("the name of the hero is copied from the payload", () => {
    sut.run(ServicesTestData.createHeroAction, ServicesTestData.storeConfigAction);
    expect(post.mock.calls[0][1].name).toBe("joe")
  });

  test("the id of the hero is empty string, will be assigned by the API", () => {
    sut.run(ServicesTestData.createHeroAction, ServicesTestData.storeConfigAction);
    expect(post.mock.calls[0][1].id).toBe("")
  });

  test("returns the result given by the server", () => {
    expect(sut.run(ServicesTestData.createHeroAction, ServicesTestData.storeConfigAction)).toBe(ret);
  });
})

