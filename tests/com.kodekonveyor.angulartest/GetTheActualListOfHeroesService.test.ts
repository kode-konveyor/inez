import { Store } from "@ngrx/store";
import { mock, mockFn } from "jest-mock-extended";
import { AppStore } from "src/com.kodekonveyor.angulartest/repositories/AppStore";
import { GetTheActualListOfHeroesService } from "src/com.kodekonveyor.angulartest/services/GetTheActualListOfHeroesService";
import { addHero } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { HEROES } from "src/legacy/mock-heroes";
import { ObtainHeroesService } from "src/com.kodekonveyor.angulartest/services/ObtainHeroesService";
import { of } from "rxjs";


describe("Get the actual list of heroes", () => {
  let sut: GetTheActualListOfHeroesService;
  const store: Store<AppStore> = mock<Store<AppStore>>();
  const obtainHeroesService: ObtainHeroesService = mock<ObtainHeroesService>();
  beforeEach(() => {
    const run = mockFn();
    run.mockReturnValue(of(HEROES));
    obtainHeroesService.run = run;
    sut = new GetTheActualListOfHeroesService(store, obtainHeroesService);
  });
  test("we actually load a hero", async () => {
    sut.run();
    expect(store.dispatch).toBeCalledWith(
      addHero({ hero: HEROES[0] })
    );
  });
})
