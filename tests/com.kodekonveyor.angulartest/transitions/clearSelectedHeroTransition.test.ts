import { clearSelectedHeroTransition } from "src/com.kodekonveyor.angulartest/transitions/clearSelectedHeroTransition";
import { initialState } from "src/com.kodekonveyor.angulartest/repositories/Repository";
import { ServicesTestData } from "../services/ServicesTestData";

describe("Save Hero", () => {



  test("the heroeditor componentstate is reset to its initial state (test from initial state)", () => {
    const result = clearSelectedHeroTransition(ServicesTestData.initialState_with_heroeditor_changed);
    expect(result).toEqual(initialState)
  });

  test("the heroeditor componentstate is reset to its initial state (test from noninitial state)", () => {
    const result = clearSelectedHeroTransition(ServicesTestData.nonInitialState);
    expect(result).toEqual(ServicesTestData.nonInitialState_with_heroeditor_reset)
  });


})

