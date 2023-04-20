import { Contract } from 'cdd-ts';
import { bindTransition } from 'src/bindTransition';
import { modifyHero } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { ModifyHeroTransitionService } from 'src/com.kodekonveyor.angulartest/transitions/ModifyHeroTransitionService';
import { HeroTestData } from 'testdata/HeroTestData';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const modifyheroTransitionContractParties = [
  bindTransition(ModifyHeroTransitionService),
];

export const modifyheroTransitionContract = new Contract<
  ModifyHeroTransitionService['modifyHeroTransition']
>()
  .setTitle('modify hero')
  .ifCalledWith(TransitionTestData.initialState, () =>
    modifyHero({ payload: HeroTestData.modified() })
  )
  .thenReturn(
    'if there is no item for the hero, the modification will be silently ignored',
    TransitionTestData.initialState
  )

  .ifCalledWith(TransitionTestData.nonInitialState, () =>
    modifyHero({ payload: HeroTestData.modified() })
  )
  .thenReturn(
    'if there is no item for the hero, the modification will be silently ignored',
    TransitionTestData.nonInitialStateHeroModified
  );
