import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SeleccionarCanchaPage } from './seleccionar-cancha.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarCanchaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SeleccionarCanchaPage]
})
export class SeleccionarCanchaPageModule {}
