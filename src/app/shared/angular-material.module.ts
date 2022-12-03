import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
  ],
  exports: [
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
  ],
})
export class AngularMaterialModule {}
