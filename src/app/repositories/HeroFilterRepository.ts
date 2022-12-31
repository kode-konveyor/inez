import { EventEmitter, Injectable } from '@angular/core';
import { HeroFilter } from 'src/types/HeroFilter';


@Injectable()
export class HeroFilterRepository {
  public heroFilter?: HeroFilter;
  public readonly heroFilterEvent = new EventEmitter<HeroFilter>();

  public set(filter: HeroFilter): void {
    this.heroFilter = filter;
    this.heroFilterEvent.emit(filter);

  }
}

