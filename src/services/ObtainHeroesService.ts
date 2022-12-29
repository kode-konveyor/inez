import { Heroes } from 'src/types/Heroes';
import { HEROES } from './mock-heroes';

export function obtainHeroesService(): Heroes {
  return HEROES;
}
