import { Contract } from 'cdd-ts';
import { bindTransition } from 'src/bindTransition';
import { SetSelectedHeroTransitionService } from 'src/com.kodekonveyor.angulartest/transitions/SetSelectedHeroTransitionService';
import { ActionTestData } from 'testdata/ActionTestData';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const setSelectedHeroTransitionContractParties = [
  bindTransition(SetSelectedHeroTransitionService),
];

export const setSelectedHeroTransitionContract = new Contract<
  SetSelectedHeroTransitionService['setSelectedHeroTransition']
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
