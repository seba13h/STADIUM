import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BusquedaCanchaPage } from './busqueda-cancha.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedaCanchaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BusquedaCanchaPage]
})
export class BusquedaCanchaPageModule {}
