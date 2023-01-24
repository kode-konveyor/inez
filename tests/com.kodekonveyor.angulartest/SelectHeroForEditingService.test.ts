import { Store } from "@ngrx/store";
import { mock, mockFn } from "jest-mock-extended";
import { AppStore } from "src/com.kodekonveyor.angulartest/types/AppStore";
import { SelectHeroForEditingService } from "src/com.kodekonveyor.angulartest/services/SelectHeroForEditingService";
import { HERO } from "./testdata/HeroTestData";

describe("Select hero for editing", () => {

  const dispatch = mockFn<any, any>()
  const store = mock<Store<AppStore>>()
  store.dispatch = dispatch;
  const sut = new SelectHeroForEditingService(store);
  sut.run(HERO);

  test("turns on Create Mode", () => {
    expect(store.dispatch).toBeCalledWith({
      "payload": false,
      "type": "set create mode",
    })
  });
  test("The selected hero will be the hero from the heroitem", () => {
    expect(store.dispatch).toBeCalledWith({
      "payload": {
        "id": 1,
        "name": "Test Hero",
      },
      "type": "set selected hero",
    })
  });
});
