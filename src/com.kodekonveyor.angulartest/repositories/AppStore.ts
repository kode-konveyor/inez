import { Hero } from '../types/Hero';
import { Heroes } from '../types/Heroes';

export interface AppStore {
  heroes: Heroes;
  heroFilter: String;
  selectedHero: Hero;
  createMode: boolean;
}
