import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { Angulartest } from './com.kodekonveyor.angulartest/module'

platformBrowserDynamic().bootstrapModule(Angulartest)
  .catch(err => console.error(err))
