import { storeConfig } from "src/com.kodekonveyor.angulartest/repositories/actions";
import { storeConfigTransition } from "src/com.kodekonveyor.angulartest/transitions/storeConfigTransition";
import { TransitionTestData } from "../testdata/TransitionTestData";

describe("Store config", () => {
  const result = storeConfigTransition(TransitionTestData.initialState, storeConfig({ payload: { baseUrl: TransitionTestData.baseUrl } }));

  test("sets baseURL in states to the action payload (test from initial state)", () => {
    expect(result.states.baseURL).toEqual(TransitionTestData.baseUrl)
  });


})

