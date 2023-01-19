import { Store } from "@ngrx/store";
import { mock } from "jest-mock-extended";
import { AppStore } from "src/com.kodekonveyor.angulartest/repositories/AppStore";
import { GetTheActualListOfHeroesService } from "src/com.kodekonveyor.angulartest/services/GetTheActualListOfHeroesService";
import { addHero } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { HEROES } from "src/legacy/mock-heroes";


describe("Get the actual list of heroes", () => {
  let sut: GetTheActualListOfHeroesService;
  const store: Store<AppStore> = mock<Store<AppStore>>();

  beforeEach(() => {
    sut = new GetTheActualListOfHeroesService(store)
  });
  test("we actually load a hero", async () => {
    sut.run();
    expect(store.dispatch).toBeCalledWith(
      addHero(HEROES[0])
    );
  });
})
