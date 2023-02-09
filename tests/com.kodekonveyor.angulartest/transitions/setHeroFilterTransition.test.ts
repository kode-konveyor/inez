import { TransitionTestData } from "../testdata/TransitionTestData";
import { setHeroFilter } from "src/com.kodekonveyor.angulartest/repositories/actions";
import { setHeroFilterTransition } from "src/com.kodekonveyor.angulartest/transitions/setHeroFilterTransition";

describe("Set hero filter", () => {

  test("the heroFilter property of herofilter is set to the value of the action (test from initial state)", () => {
    const result = setHeroFilterTransition(TransitionTestData.initialState, setHeroFilter({ payload: "e" }));
    expect(result).toEqual(TransitionTestData.initialState_herofilter_e)
  });

  test("the heroFilter property of herofilter is set to the value of the action (test from noninitial state)", () => {
    const result = setHeroFilterTransition(TransitionTestData.nonInitialState, setHeroFilter({ payload: "e" }));
    expect(result).toEqual(TransitionTestData.nonInitialState_herofilter_e)
  });

})

