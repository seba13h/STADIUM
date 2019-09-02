import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCrearEquipoPage } from './modal-crear-equipo.page';
import { ModalArqueroSelPage } from '../modal-arquero-sel/modal-arquero-sel.page';
import { ModalArqueroSelPageModule } from '../modal-arquero-sel/modal-arquero-sel.module';

@NgModule({
  entryComponents: [
    ModalArqueroSelPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalArqueroSelPageModule
  ],
  declarations: [ModalCrearEquipoPage]
})
export class ModalCrearEquipoPageModule {}
