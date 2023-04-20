import { Contract } from 'cdd-ts';
import { setHeroFilterTransition } from 'src/com.kodekonveyor.angulartest/transitions/setHeroFilterTransition';
import { ActionTestData } from 'testdata/TestData';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const setHeroFilterTransitionContractParties = [setHeroFilterTransition];

export const setHeroFilterTransitionContract = new Contract<
  typeof setHeroFilterTransition
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
