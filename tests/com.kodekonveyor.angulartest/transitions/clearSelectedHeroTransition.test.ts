import { clearSelectedHeroTransition } from "src/com.kodekonveyor.angulartest/transitions/clearSelectedHeroTransition";
import { initialState } from "src/com.kodekonveyor.angulartest/repositories/Repository";
import { TransitionTestData } from "../testdata/TransitionTestData";

describe("Clear selected hero", () => {

  test("the heroeditor componentstate is reset to its initial state (test from initial state)", () => {
    const result = clearSelectedHeroTransition(TransitionTestData.initialState_with_heroeditor_changed);
    expect(result).toEqual(initialState)
  });

  test("the heroeditor componentstate is reset to its initial state (test from noninitial state)", () => {
    const result = clearSelectedHeroTransition(TransitionTestData.nonInitialState);
    expect(result).toEqual(TransitionTestData.nonInitialState_with_heroeditor_reset)
  });


})

