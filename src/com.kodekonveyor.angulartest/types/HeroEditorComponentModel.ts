import { type IdType } from "src/com.kodekonveyor.common/IdType";

export interface HeroEditorComponentModel {
  createMode: boolean;
  show: boolean;
  selectedHeroId: IdType;
  selectedHeroName: string;
}
