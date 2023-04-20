import { Contract } from 'cdd-ts';
import { StoreHeroesService } from 'src/com.kodekonveyor.angulartest/services/StoreHeroesService';
import { returnsEmptyObservable } from 'testdata/helpers/returnsEmptyObservable';
import { ActionTestData } from 'testdata/ActionTestData';
import {
  ObservableTestData,
  storeHeroForAll,
} from 'testdata/ObservableTestData';
import { emitsvalues } from 'testdata/helpers/emitsvalues';

export const StoreHeroesServiceContractParties = [new StoreHeroesService().run];

export const StoreHeroesServiceContract = new Contract<
  StoreHeroesService['run']
>()
  .setTitle('emits the actions to store all the heroes')

  .ifCalledWith(ActionTestData.storeHeroesEmpty)
  .thenReturn(
    'for an empty hero list returns an empty observable',
    ObservableTestData.empty
  )
  .suchThat('the observable is empty', returnsEmptyObservable)

  .ifCalledWith(ActionTestData.storeHeroesAll)
  .thenReturn(
    'an observable emitting storeHero action for each heroes',
    ObservableTestData.storeHeroForAll
  )
  .suchThat(
    'the observable emits all the heroes in turn',
    emitsvalues(storeHeroForAll)
  );
