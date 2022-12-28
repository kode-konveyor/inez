import { Hero } from './Hero';

export interface AppData {
  title: string;
  selectedHero?: Hero;
  heroes: Hero[];
}
