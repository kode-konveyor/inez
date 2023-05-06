import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, type Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: async () => {
      const m = await import('src/inez/inez-module');
      return m.InezModule;
    },
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
