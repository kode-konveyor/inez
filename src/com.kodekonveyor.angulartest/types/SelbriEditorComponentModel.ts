import { type IdType } from 'src/com.kodekonveyor.common/IdType';

export interface SelbriEditorComponentModel {
  createMode: boolean;
  show: boolean;
  selectedSelbriId: IdType;
  selectedSelbriName: string;
}
