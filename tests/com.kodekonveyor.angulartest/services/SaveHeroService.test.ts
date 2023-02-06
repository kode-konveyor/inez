import { HttpClient } from "@angular/common/http";
import { SaveHeroService } from "src/com.kodekonveyor.angulartest/services/SaveHeroService";
import { mock, mockFn } from "jest-mock-extended";

describe("Save Hero", () => {

  const httpClient: HttpClient = mock<HttpClient>();
  const post = mockFn();
  httpClient.post = post;
  const sut = new SaveHeroService(httpClient);
  const createEvent = { type: "c", payload: "joe" }
  const data = { baseURL: "BASE_URL" }

  test("the hero is posted to the right place", () => {
    sut.run(createEvent, data);
    expect(post.mock.calls[0][0]).toBe("BASE_URL/api/v1/hero")
  });
})

