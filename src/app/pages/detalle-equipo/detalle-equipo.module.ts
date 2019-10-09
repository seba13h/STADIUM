import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalleEquipoPage } from './detalle-equipo.page';
import { ModalFhDesafioPage } from '../modal-fh-desafio/modal-fh-desafio.page';
import { ModalFhDesafioPageModule } from '../modal-fh-desafio/modal-fh-desafio.module';

const routes: Routes = [
  {
    path: '',
    component: DetalleEquipoPage
  }
];

@NgModule({
  entryComponents: [
    ModalFhDesafioPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModalFhDesafioPageModule
  ],
  declarations: [DetalleEquipoPage]
})
export class DetalleEquipoPageModule {}
