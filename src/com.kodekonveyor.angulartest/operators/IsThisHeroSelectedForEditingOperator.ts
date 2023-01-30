import { Hero } from '../types/Hero';
import { States } from '../types/States';

export function isThisHeroSelectedForEditingOperator(hero: [Hero, States]
): Boolean {
  return hero[0] === hero[1].selectedHero
}


