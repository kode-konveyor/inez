import { Store } from "@ngrx/store";
import { any, mock, mockFn, MockProxy } from "jest-mock-extended";
import { AppState } from "src/com.kodekonveyor.angulartest/types/AppState";
import { CreateHeroService } from "src/com.kodekonveyor.angulartest/services/CreateHeroService";
import { HttpClient } from "@angular/common/http";
import { Synchronizer } from "src/com.kodekonveyor.angulartest/services/Synchronizer";
import { HERO } from "./testdata/HeroTestData";
import { States } from "src/com.kodekonveyor.angulartest/types/States";
import { Observable, Subject } from "rxjs";
import { Hero } from "src/com.kodekonveyor.angulartest/types/Hero";
import { addHero, setCreateMode, setSelectedHero } from "src/com.kodekonveyor.angulartest/repositories/actions";

describe("Change to create mode", () => {

  const dispatch = mockFn<any, any>()
  const store = mock<Store<AppState>>()
  store.dispatch = dispatch;
  const httpClient: MockProxy<HttpClient> = mock<HttpClient>();
  const hero$: Subject<Hero> = new Subject<Hero>();
  httpClient.post.calledWith(any(), any()).mockReturnValue(hero$);
  const synchronizer: MockProxy<Synchronizer> = mock<Synchronizer>();
  const states$: Observable<States> = mock<Observable<States>>();
  synchronizer.fromStore.calledWith('states').mockReturnValue(states$)
  const sut = new CreateHeroService(httpClient, store, synchronizer);
  sut.run(HERO);
  hero$.next(HERO);

  test("The hero is saved on the server", () => {
    expect(httpClient.post).toBeCalledWith("/api/v1/hero", HERO);
  });

  test("The returned hero is added to the store", () => {
    expect(store.dispatch).toBeCalledWith(addHero({ payload: HERO }));
  });

  test("The returned hero is set as selected", () => {
    expect(store.dispatch).toBeCalledWith(setSelectedHero({ payload: HERO }));
  });

  test("create mode is set to false", () => {
    expect(store.dispatch).toBeCalledWith(setCreateMode({ "payload": false }));
  });

});
