import { RouterModule, Routes } from '@angular/router';

import { ChallengesComponent } from './components/challenges/challenges.component';
import { CommonModule } from '@angular/common';
import { GamePlanComponent } from './game-plan.component';
import { NgModule } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';

const routes: Routes = [{ path: '', component: GamePlanComponent }];

@NgModule({
  declarations: [
    GamePlanComponent,
    SideNavComponent,
    SearchBarComponent,
    ChallengesComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [],
})
export class GamePlanModule {}
