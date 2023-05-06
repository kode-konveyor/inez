import { type IdType } from 'src/common/IdType';

export interface SelbriEditorComponentModel {
  createMode: boolean;
  show: boolean;
  selectedSelbriId: IdType;
  selectedSelbriName: string;
}
