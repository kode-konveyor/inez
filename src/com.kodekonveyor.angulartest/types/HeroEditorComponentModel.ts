import { IdType } from "src/com.kodekonveyor.common/IdType";

export interface HeroEditorComponentModel {
  createMode: Boolean;
  show: Boolean;
  selectedHeroId: IdType;
  selectedHeroName: string;
}
