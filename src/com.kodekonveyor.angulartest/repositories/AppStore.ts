import { Hero } from '../types/Hero';
import { Heroes } from '../types/Heroes';

export interface AppStore {
  heroes: Heroes;
  filterString: string;
  selectedHero?: Hero;
}
