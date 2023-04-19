import { type HeroEditorComponentModel } from './HeroEditorComponentModel';
import { type HeroesComponentModel } from './HeroesComponentModel';
import { type HeroFilterComponentModel } from './HeroFilterComponentModel';
import { type HeroitemComponentModel } from './HeroitemComponentModel';
import { type HeroListComponentModel } from './HeroListComponentModel';

export const emptyComponents = []
export const multiComponents = ["heroitem"]

export interface ComponentModels {
  heroeditor: HeroEditorComponentModel;
  herofilter: HeroFilterComponentModel;
  heroitem: Record<string, HeroitemComponentModel>;
  herolist: HeroListComponentModel;
  heroes: HeroesComponentModel
}
