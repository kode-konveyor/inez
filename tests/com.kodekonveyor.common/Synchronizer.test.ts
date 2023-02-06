import { mock } from "jest-mock-extended";
import { Synchronizer } from "src/com.kodekonveyor.common/Synchronizer";
import { Store } from "@ngrx/store";
import { AppState } from "src/com.kodekonveyor.angulartest/types/AppState";
import { HeroesComponent } from "src/com.kodekonveyor.angulartest/UI/heroes/heroes.component";
import { Subject } from "rxjs";
import { initialState, states } from "src/com.kodekonveyor.angulartest/repositories/Repository";
import { HeroesComponentModel } from "src/com.kodekonveyor.angulartest/types/HeroesComponentModel";

describe("Fill Fields", () => {

  const store = mock<Store<AppState>>();
  const observable = new Subject<HeroesComponentModel>();
  const selected = states.componentstates.heroes._(initialState)
  store.select.mockReturnValue(observable);
  const sut = new Synchronizer(store);

  const heroesComponent = mock<HeroesComponent>();
  heroesComponent.id = "foo_12";

  test("fillFields fills fields", () => {
    sut.fillFields(heroesComponent, 'heroes');
    const selectParam = store.select.mock.calls[0];
    console.log("selectParam", selectParam)
    observable.next(selected);
    console.log("component", heroesComponent)
  });

});

