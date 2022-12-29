import { Hero } from '../types/Hero';
import { HEROES } from './mock-heroes';

export function obtainHeroesService(): Hero[] {
  return HEROES;
}
