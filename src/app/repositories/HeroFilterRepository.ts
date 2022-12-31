import { Injectable } from '@angular/core';
import { HeroFilter } from 'src/types/HeroFilter';


@Injectable()
export class HeroFilterRepository {
  public readonly heroFilter: HeroFilter = { filterString: '' };
}

