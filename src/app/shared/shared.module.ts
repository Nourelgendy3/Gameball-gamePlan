import { AngularMaterialModule } from './angular-material.module';
import { ChallengeCardComponent } from './components/challenge-card/challenge-card.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layouts/header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HeaderComponent, ChallengeCardComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [HeaderComponent, ChallengeCardComponent, AngularMaterialModule],
})
export class SharedModule {}
