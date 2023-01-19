import { Observable } from 'rxjs';
import { Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';

export interface HeroListComponentModel {
  heroes: Observable<Heroes>;
}
