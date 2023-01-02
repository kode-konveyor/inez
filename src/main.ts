import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './com.kodekonveyor.angulartest/module'

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err))
