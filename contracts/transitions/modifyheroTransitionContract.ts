import { Contract } from 'cdd-ts';
import { modifyHero } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { modifyHeroTransition } from 'src/com.kodekonveyor.angulartest/transitions/modifyHeroTransition';
import { HeroTestData } from 'testdata/TestData';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const modifyheroTransitionContractParties = [modifyHeroTransition];

export const modifyheroTransitionContract = new Contract<
  typeof modifyHeroTransition
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
