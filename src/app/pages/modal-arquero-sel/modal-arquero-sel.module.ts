import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalArqueroSelPage } from './modal-arquero-sel.page';
import { ModalAjusteDistanciaPage } from '../modal-ajuste-distancia/modal-ajuste-distancia.page';
import { ModalAjusteDistanciaPageModule } from '../modal-ajuste-distancia/modal-ajuste-distancia.module';

@NgModule({
  entryComponents: [
    ModalAjusteDistanciaPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAjusteDistanciaPageModule
  ],
  declarations: [ModalArqueroSelPage]
})
export class ModalArqueroSelPageModule {}
