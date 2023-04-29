import { Contract } from 'cdd-ts';
import { bindTransition } from 'src/bindTransition';
import { modifySelbri } from 'src/com.kodekonveyor.angulartest/repositories/actions';
import { ModifySelbriTransitionService } from 'src/com.kodekonveyor.angulartest/transitions/ModifySelbriTransitionService';
import { SelbriTestData } from 'testdata/SelbriTestData';
import { TransitionTestData } from 'testdata/TransitionTestData';

export const modifySelbriTransitionContractParties = [
  bindTransition(ModifySelbriTransitionService),
];

export const modifySelbriTransitionContract = new Contract<
  ModifySelbriTransitionService['modifySelbriTransition']
>()
  .setTitle('modify selbri')
  .ifCalledWith(TransitionTestData.initialState, () =>
    modifySelbri({ payload: SelbriTestData.modified() })
  )
  .thenReturn(
    'if there is no item for the selbri, the modification will be silently ignored',
    TransitionTestData.initialState
  )

  .ifCalledWith(TransitionTestData.nonInitialState, () =>
    modifySelbri({ payload: SelbriTestData.modified() })
  )
  .thenReturn(
    'if there is no item for the selbri, the modification will be silently ignored',
    TransitionTestData.nonInitialStateSelbriModified
  );
