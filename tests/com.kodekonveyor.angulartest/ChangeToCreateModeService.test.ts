import { Store } from "@ngrx/store";
import { mock, mockFn } from "jest-mock-extended";
import { AppState } from "src/com.kodekonveyor.angulartest/types/AppState";
import { ChangeToCreateModeService } from "src/com.kodekonveyor.angulartest/services/ChangeToCreateModeService";

describe("Change to create mode", () => {

  const dispatch = mockFn<any, any>()
  const store = mock<Store<AppState>>()
  store.dispatch = dispatch;
  const sut = new ChangeToCreateModeService(store);
  sut.run();

  test("turns on Create Mode", () => {
    expect(store.dispatch).toBeCalledWith({
      "payload": true,
      "type": "set create mode",
    })
  });
  test("The selected hero will be cleared", () => {
    expect(store.dispatch).toBeCalledWith({
      "type": "clear selected hero",
    })
  });
});
