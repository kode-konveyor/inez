import { Hero } from "../types/Hero";
import { Heroes } from "../types/Heroes";
import { States } from "../types/States";

export function heroItemOperator(params: [
  Heroes,
  States,
]): Heroes {
  const heroes = params[0]
  const filterString = params[1].heroFilter
  const r: Heroes = []
  heroes.forEach(
    (h: Hero) => {
      if (h.name.match(filterString as string) != null) {
        r.push(h)
      }
    }
  );
  return r;
}
