import { Hero } from "../types/Hero";
import { Heroes } from "../types/Heroes";

export function heroItemFilter(params: [
  Heroes,
  String
]): Heroes {
  const heroes = params[0]
  const filterString = params[1]
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
