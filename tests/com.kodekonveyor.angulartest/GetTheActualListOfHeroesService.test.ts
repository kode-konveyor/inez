import { Store } from "@ngrx/store";
import { mock, mockFn } from "jest-mock-extended";
import { AppStore } from "src/com.kodekonveyor.angulartest/types/AppStore";
import { GetTheActualListOfHeroesService } from "src/com.kodekonveyor.angulartest/services/GetTheActualListOfHeroesService";
import { addHero } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { HEROES } from "src/legacy/mock-heroes";
import { ObtainHeroesService } from "src/com.kodekonveyor.angulartest/services/ObtainHeroesService";
import { Synchronizer } from "src/com.kodekonveyor.angulartest/services/Synchronizer";
import { Observable, of } from "rxjs";
import { States } from "src/com.kodekonveyor.angulartest/types/States";


describe("Get the actual list of heroes", () => {
  let sut: GetTheActualListOfHeroesService;
  const store: Store<AppStore> = mock<Store<AppStore>>();
  const obtainHeroesService: ObtainHeroesService = mock<ObtainHeroesService>();
  beforeEach(() => {
    const run = mockFn();
    run.mockReturnValue(of(HEROES));
    obtainHeroesService.run = run;
    const synchonizer = mock<Synchronizer>();
    const fromStore = mockFn<any, any>();
    synchonizer.fromStore = fromStore;
    const statesObservable = mock<Observable<States>>();
    statesObservable.subscribe = mockFn();
    fromStore.mockReturnValue(statesObservable);
    sut = new GetTheActualListOfHeroesService(obtainHeroesService, synchonizer, store);
  });
  test("we actually load a hero", async () => {
    sut.run();
    expect(store.dispatch).toBeCalledWith(
      addHero({ payload: HEROES[0] })
    );
  });
})
