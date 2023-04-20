import { of } from 'rxjs';
import { storeHero } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { observableOf } from './helpers/observableOf';
import { HeroesTestData } from './HeroesTestData';
import { HeroTestData } from './HeroTestData';

const emptyObservable = of();
(emptyObservable as unknown as { _name: string })._name = 'of()';

export const storeHeroForAll = HeroesTestData.default.map((h) =>
  storeHero({ payload: h })
);

export const ObservableTestData = {
  heroes: () => observableOf(HeroesTestData.default),
  empty: () => emptyObservable,
  idedHero: () => observableOf(HeroTestData.withId()),
  storeHeroForAll: () => observableOf(storeHeroForAll),
};
