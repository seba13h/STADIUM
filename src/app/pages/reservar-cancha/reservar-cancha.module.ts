import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReservarCanchaPage } from './reservar-cancha.page';

const routes: Routes = [
  {
    path: '',
    component: ReservarCanchaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReservarCanchaPage]
})
export class ReservarCanchaPageModule {}
