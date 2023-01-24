import { States } from 'src/com.kodekonveyor.angulartest/types/States';

export function shouldEditorBeShownOperator(state: States): boolean {
  return (state.createMode === true) ||
    (state.selectedHero.id != null);
}
