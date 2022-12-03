import { RouterModule, Routes } from '@angular/router';

import { ChallengesComponent } from './components/challenges/challenges.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent,
    SideNavComponent,
    SearchBarComponent,
    ChallengesComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [],
})
export class HomeModule {}
