import { type Action } from '@ngrx/store';
import { Contract } from 'cdd-ts';
import { of } from 'rxjs';
import { GenericErrorHandlerService } from 'src/common/GenericErrorHandlerService';
import { ObtainConfigEffectService } from 'src/inez/effects/ObtainConfigEffectService';
import { ActionSequenceTestData } from 'testdata/ActionSequenceTestData';
import { ExternalServices } from 'testdata/ExternalServices';
import { emitsvalues } from 'testdata/helpers/emitsvalues';

export const ObtainConfigEffectServiceContractParties = [
  new ObtainConfigEffectService(
    ExternalServices.httpClient,
    new GenericErrorHandlerService(),
    ExternalServices.synchronizer
  ).obtainConfigEffect,
];

export const ObtainConfigEffectServiceContract = new Contract<
  ObtainConfigEffectService['obtainConfigEffect']
>()
  .setTitle('obtains config')
  .ifCalledWith()
  .thenReturn('a store event for config is emitted', {
    default: () =>
      of(ActionSequenceTestData.storedConfig() as unknown as Action),
    check: emitsvalues(ActionSequenceTestData.storedConfig()),
  });
