import { Hero } from '../types/Hero';

export function isThisHeroSelectedForEditingFilter(hero: Hero[]
): Boolean {
  return hero[0] === hero[1]
}


