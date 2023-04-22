import { ObtainHeroesService } from '../../src/com.kodekonveyor.angulartest/services/ObtainHeroesService';
import { Contract, serialize } from 'cdd-ts';
import { returnsEmptyObservable } from 'testdata/helpers/returnsEmptyObservable';
import { ObservableTestData } from 'testdata/ObservableTestData';
import { HeroesTestData } from 'testdata/HeroesTestData';
import { emitsvalues } from 'testdata/helpers/emitsvalues';
import { ExternalServices } from 'testdata/ExternalServices';
import { ObtainHeroesParameterTestData } from 'testdata/ObtainHeroesParameterTestData';

export const ObtainHeroesServiceContractParties = [
  new ObtainHeroesService(ExternalServices.httpClient).obtainHeroes,
];

export const ObtainHeroesServiceContract = new Contract<
  ObtainHeroesService['obtainHeroes']
>()
  .setTitle('Obtain heroes service')
  .ifCalledWith({
    default: [ObtainHeroesParameterTestData.default],
    checker: (param) =>
      serialize(param) === serialize(ObtainHeroesParameterTestData.default())
        ? undefined
        : param,
  })
  .thenReturn('returns a Heroes observable', {
    default: ObservableTestData.heroes,
    check: emitsvalues([HeroesTestData.default]),
  })

  .ifCalledWith(ObtainHeroesParameterTestData.nullUser)
  .thenReturn('if there is no user, returns an empty observable', {
    default: ObservableTestData.empty,
    check: returnsEmptyObservable,
  });
