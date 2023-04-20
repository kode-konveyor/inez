import { ObtainHeroesService } from '../../src/com.kodekonveyor.angulartest/services/ObtainHeroesService';
import { Contract } from 'cdd-ts';
import { returnsEmptyObservable } from 'testdata/helpers/returnsEmptyObservable';
import { ActionTestData } from 'testdata/ActionTestData';
import { ObservableTestData } from 'testdata/ObservableTestData';
import { HeroesTestData } from 'testdata/HeroesTestData';
import { emitsvalues } from 'testdata/helpers/emitsvalues';
import { ExternalServices } from 'testdata/ExternalServices';

export const ObtainHeroesServiceContractParties = [
  new ObtainHeroesService(ExternalServices.httpClient).obtainHeroes,
];

export const ObtainHeroesServiceContract = new Contract<
  ObtainHeroesService['obtainHeroes']
>()
  .setTitle('Obtain heroes service')
  .ifCalledWith(
    ActionTestData.changeUserAction,
    ActionTestData.storeConfigAction
  )
  .thenReturn('returns a Heroes observable', ObservableTestData.heroes)
  .suchThat(
    'the observable gives heroes',
    emitsvalues([HeroesTestData.default])
  )

  .ifCalledWith(ActionTestData.nullUserAction, ActionTestData.storeConfigAction)
  .thenReturn(
    'if there is no user, returns an empty observable',
    ObservableTestData.empty
  )
  .suchThat('the observable completes without a value', returnsEmptyObservable);
