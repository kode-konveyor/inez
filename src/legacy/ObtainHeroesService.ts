import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';
import { HEROES } from './mock-heroes';

export function obtainHeroesService(): Heroes {
  return HEROES;
}
