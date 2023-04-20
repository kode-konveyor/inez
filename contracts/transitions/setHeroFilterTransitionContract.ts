import { Contract } from 'cdd-ts';
import { bindTransition } from 'src/bindTransition';
import { SetHeroFilterTransitionService } from 'src/com.kodekonveyor.angulartest/transitions/SetHeroFilterTransitionService';
import { ActionTestData } from 'testdata/ActionTestData';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const setHeroFilterTransitionContractParties = [
  bindTransition(SetHeroFilterTransitionService),
];

export const setHeroFilterTransitionContract = new Contract<
  SetHeroFilterTransitionService['setHeroFilterTransition']
>()
  .setTitle('sets the hero filter')

  .ifCalledWith(TransitionTestData.initialState, ActionTestData.setHeroFilter)
  .thenReturn(
    'sets the hero filter to the value of the action',
    TransitionTestData.initialStateHerofilterE
  )
  .ifCalledWith(
    TransitionTestData.nonInitialState,
    ActionTestData.setHeroFilter
  )
  .thenReturn(
    'other things do not change',
    TransitionTestData.nonInitialStateHerofilterE
  );
