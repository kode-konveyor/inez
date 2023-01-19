import { Observable } from 'rxjs';
import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';

export interface HeroesComponentModel {
  heroes: Observable<Heroes>;
}
