import { Hero } from '../types/Hero';

export function isThisHeroSelectedForEditingFilter(hero: Hero[]
): Boolean {
  console.log(hero, hero[0] === hero[1])
  return hero[0] === hero[1]
}


