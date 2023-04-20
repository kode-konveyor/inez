import { Contract } from 'cdd-ts';
import { storeHeroTransition } from 'src/com.kodekonveyor.angulartest/transitions/storeHeroTransition';
import { ActionTestData } from 'testdata/TestData';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const storeHeroTransitionContractParties = [storeHeroTransition];

export const storeHeroTransitionContract = new Contract<
  typeof storeHeroTransition
>()
  .setTitle('store hero')

  .ifCalledWith(TransitionTestData.initialState, ActionTestData.storeHero)
  .thenReturn(
    'a new heroitem created, the hero is put in it, its id is put to the herolist, and if the hero is not selected, its selected state is set to false',
    TransitionTestData.initialStateHeroStored
  )

  .ifCalledWith(TransitionTestData.nonInitialState, ActionTestData.storeHero)
  .thenReturn(
    'nothing s changed beyond the new heroitem and the herolist. If the hero is selected, its selected state is set to true',
    TransitionTestData.nonInitialStateHeroStored
  );
