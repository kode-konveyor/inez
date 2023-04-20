import {
  ObtainHeroesService,
  type ObtainHeroesServiceType,
} from '../../src/com.kodekonveyor.angulartest/services/ObtainHeroesService';
import { Contract } from 'cdd-ts';
import {
  ActionTestData,
  emitsvalues,
  ExternalServices,
  HeroesTestdata,
  ObservableTestData,
  returnsEmptyObservable,
} from 'testdata/TestData';

export const ObtainHeroesServiceContractParties = [
  new ObtainHeroesService(ExternalServices.httpClient).run,
];

export const ObtainHeroesServiceContract =
  new Contract<ObtainHeroesServiceType>()
    .setTitle('Obtain heroes service')
    .ifCalledWith(
      ActionTestData.changeUserAction,
      ActionTestData.storeConfigAction
    )
    .thenReturn('returns a Heroes observable', ObservableTestData.heroes)
    .suchThat(
      'the observable gives heroes',
      emitsvalues([HeroesTestdata.default])
    )

    .ifCalledWith(
      ActionTestData.nullUserAction,
      ActionTestData.storeConfigAction
    )
    .thenReturn(
      'if there is no user, returns an empty observable',
      ObservableTestData.empty
    )
    .suchThat(
      'the observable completes without a value',
      returnsEmptyObservable
    );
