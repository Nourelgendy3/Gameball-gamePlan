import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/game-plan/game-plan.module').then(
        (m) => m.GamePlanModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
