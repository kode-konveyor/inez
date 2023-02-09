import { TransitionTestData } from "../testdata/TransitionTestData";
import { showEditorTransition } from "src/com.kodekonveyor.angulartest/transitions/showEditorTransition";

describe("Show editor", () => {
  const result = showEditorTransition(TransitionTestData.nonInitialState);

  test("sets show in heroeditort true (test from initial state)", () => {
    expect(result.componentstates.heroeditor.createMode).toEqual(true)
  });

  test("sets createmode in heroeditor to true (test from initial state)", () => {
    expect(result.componentstates.heroeditor.show).toEqual(true)
  });

  test("sets selectedHeroId in heroeditor to empty string (test from initial state)", () => {
    expect(result.componentstates.heroeditor.selectedHeroId).toEqual("")
  });

  test("sets selectedHeroName in heroeditor to empty string (test from initial state)", () => {
    expect(result.componentstates.heroeditor.selectedHeroName).toEqual("")
  });

})

