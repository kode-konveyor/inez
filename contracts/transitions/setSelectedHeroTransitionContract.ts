import { Contract } from 'cdd-ts';
import { setSelectedHeroTransition } from 'src/com.kodekonveyor.angulartest/transitions/setSelectedHeroTransition';
import { ActionTestData } from 'testdata/TestData';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const setSelectedHeroTransitionContractParties = [
  setSelectedHeroTransition,
];

export const setSelectedHeroTransitionContract = new Contract<
  typeof setSelectedHeroTransition
>()
  .setTitle('Sets selected hero')
  .ifCalledWith(TransitionTestData.initialState, ActionTestData.setSelectedHero)
  .thenReturn(
    'sets the id and name in the hero editor',
    TransitionTestData.initialStateSelectedHero
  )

  .ifCalledWith(
    TransitionTestData.nonInitialState,
    ActionTestData.setSelectedHero
  )
  .thenReturn(
    'no other things are changed',
    TransitionTestData.nonInitialStateSelectedHero
  );
