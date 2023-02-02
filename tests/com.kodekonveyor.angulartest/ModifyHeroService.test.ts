import { Store } from "@ngrx/store";
import { mock } from "jest-mock-extended";
import { AppState } from "src/com.kodekonveyor.angulartest/types/AppState";
import { ModifyHeroService } from "src/com.kodekonveyor.angulartest/services/ModifyHeroService";
import { HERO } from "./testdata/HeroTestData";

describe("Modify Hero", () => {

  const store = mock<Store<AppState>>()
  const sut = new ModifyHeroService(store);
  sut.run(HERO);

  test("modifies hero in the store", () => {
    expect(store.dispatch).toBeCalledWith({
      "payload": HERO,
      "type": "modify Hero",
    })
  });
});
