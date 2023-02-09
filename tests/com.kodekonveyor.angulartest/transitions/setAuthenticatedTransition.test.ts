import { TransitionTestData } from "../testdata/TransitionTestData";
import { setAuthenticatedTransition } from "src/com.kodekonveyor.angulartest/transitions/setAuthenticatedTransition";

describe("Set authenticated to true", () => {

  test("the authenticated property of heroes is set to true (test from initial state)", () => {
    const result = setAuthenticatedTransition(TransitionTestData.initialState);
    expect(result).toEqual(TransitionTestData.initialState_authenticated)
  });

  test("the authenticated property of heroes is set to true (test from noninitial state)", () => {
    const result = setAuthenticatedTransition(TransitionTestData.nonInitialState);
    expect(result).toEqual(TransitionTestData.nonInitialState_authenticated)
  });


})

