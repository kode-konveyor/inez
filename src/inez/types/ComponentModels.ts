import { type SelbriEditorComponentModel } from './SelbriEditorComponentModel';
import { type SelbrisComponentModel } from './SelbrisComponentModel';
import { type SelbriFilterComponentModel } from './SelbriFilterComponentModel';
import { type SelbriitemComponentModel } from './SelbriitemComponentModel';
import { type SelbriListComponentModel } from './SelbriListComponentModel';

export const emptyComponents = []
export const multiComponents = ["selbriitem"]

export interface ComponentModels {
  selbrieditor: SelbriEditorComponentModel;
  selbrifilter: SelbriFilterComponentModel;
  selbriitem: Record<string, SelbriitemComponentModel>;
  selbrilist: SelbriListComponentModel;
  selbris: SelbrisComponentModel
}
