import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilPage } from './perfil.page';
import { ModalCrearEquipoPage } from '../modal-crear-equipo/modal-crear-equipo.page';
import { ModalCrearEquipoPageModule } from '../modal-crear-equipo/modal-crear-equipo.module';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage
  }
];

@NgModule({
  entryComponents: [
    ModalCrearEquipoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModalCrearEquipoPageModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
