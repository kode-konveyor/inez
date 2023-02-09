import { isEmpty } from "rxjs";
import { storeHero, storeHeroes } from "src/com.kodekonveyor.angulartest/repositories/actions";
import { StoreHeroesService } from "src/com.kodekonveyor.angulartest/services/StoreHeroesService";
import { HEROES } from "../testdata/mock-heroes";

describe("Store Heroes", () => {

  const sut = new StoreHeroesService();

  test("for empty array returns an empty observable", (done) => {
    const result = sut.run(storeHeroes({ payload: [] }));
    result.pipe(isEmpty()).subscribe((res) => {
      expect(res).toEqual(true)
      done()
    });
  })

  test("returns an observable emitting storeHero actions", (done) => {
    const result = sut.run(storeHeroes({ payload: HEROES }));
    result.pipe().subscribe({
      next: res => {
        expect(res.type).toEqual(storeHero.type)
      },
      complete: () => {
        done()
      }
    });
  })

  test("there is one action for each hero in turn", (done) => {
    const result = sut.run(storeHeroes({ payload: HEROES }));
    let index = 0;
    result.pipe().subscribe({
      next: res => {
        const a: ReturnType<typeof storeHero> = res;
        expect(a.payload).toEqual(HEROES[index])
        index += 1
      },
      complete: () => {
        expect(index).toBe(HEROES.length);
        done()
      }
    });
  })

  test("exactly one action is emitted for each hero", (done) => {
    const result = sut.run(storeHeroes({ payload: HEROES }));
    let index = 0;
    result.pipe().subscribe({
      next: res => {
        index += 1
      },
      complete: () => {
        expect(index).toBe(HEROES.length);
        done()
      }
    });
  })


});
