import { HeroEditorComponentModel } from './HeroEditorComponentModel';
import { HeroesComponentModel } from './HeroesComponentModel';
import { HeroFilterComponentModel } from './HeroFilterComponentModel';
import { HeroitemComponentModel } from './HeroitemComponentModel';
import { HeroListComponentModel } from './HeroListComponentModel';

export const emptyComponents = []
export const multiComponents = ["heroitem"]

export interface ComponentModels {
  heroeditor: HeroEditorComponentModel;
  herofilter: HeroFilterComponentModel;
  heroitem: Record<string, HeroitemComponentModel>;
  herolist: HeroListComponentModel;
  heroes: HeroesComponentModel
}
