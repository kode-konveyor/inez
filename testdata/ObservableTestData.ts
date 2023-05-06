import { type TypedAction } from '@ngrx/store/src/models';
import { type Observable, of } from 'rxjs';
import { storeSelbri } from 'src/inez/repositories/actions';
import { type Selbri } from 'src/inez/types/Selbri';
import { observableOf } from './helpers/observableOf';
import { SelbrisTestData } from './SelbrisTestData';
import { SelbriTestData } from './SelbriTestData';

const emptyObservable = of();
(emptyObservable as unknown as { _name: string })._name = 'of()';

export const storeSelbriForAll = SelbrisTestData.default.map((h) =>
  storeSelbri({ payload: h })
);

export const ObservableTestData = {
  selbris: () => observableOf(SelbrisTestData.default),
  empty: () => emptyObservable,
  idedSelbri: () => observableOf(SelbriTestData.withId()),
  storeSelbriForAll: () =>
    observableOf(storeSelbriForAll) as unknown as Observable<
      { payload: Selbri } & TypedAction<'store Selbri'>
    >,
  config: () =>
    observableOf({
      baseUrl: 'BASE_URL',
    }),
};
