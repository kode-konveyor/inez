import { appData } from "../src/app/app.component";
import { SelectHeroRepository } from "../src/services/SelectHeroService";
import { HERO } from "./testdata/HeroTestData";

describe('SelectHeroService', () => {
  const sut = new SelectHeroRepository();
  sut.call(HERO)
  test('sets the selected hero', () => {
    expect(appData.selectedHero).toBe(HERO);
  })
})
