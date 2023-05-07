import { type SelbriEditorComponentModel } from './SelbriEditorComponentModel';
import { type SelbrisComponentModel } from './SelbrisComponentModel';
import { type SelbriFilterComponentModel } from './SelbriFilterComponentModel';
import { type SelbriitemComponentModel } from './SelbriitemComponentModel';
import { type SelbriListComponentModel } from './SelbriListComponentModel';
import { type CommandlineComponentModel } from './CommandlineComponentModel';
import { type UserMessageComponentModel } from './UserMessageComponentModel.js';

export const emptyComponents = [];
export const multiComponents = ['selbriitem', 'userMessages'];

export interface ComponentModels {
  selbrieditor: SelbriEditorComponentModel;
  selbrifilter: SelbriFilterComponentModel;
  selbriitem: Record<string, SelbriitemComponentModel>;
  selbrilist: SelbriListComponentModel;
  selbris: SelbrisComponentModel;
  commandline: CommandlineComponentModel;
  userMessages: Record<string, UserMessageComponentModel>;
}
