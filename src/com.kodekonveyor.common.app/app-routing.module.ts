import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, type Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    loadChildren: () => import('src/com.kodekonveyor.angulartest/angulartest-module').then(m => m.AngulartestModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
