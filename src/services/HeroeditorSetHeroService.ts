import { Hero } from 'src/types/Hero';
import { HeroEditorComponentModel } from '../app/heroeditor/HeroEditorComponentModel';

export function heroeditorSetHeroService(component: HeroEditorComponentModel, hero: Hero): void {
  component.hero = hero;
}
