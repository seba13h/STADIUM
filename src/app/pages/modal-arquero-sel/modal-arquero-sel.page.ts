import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalAjusteDistanciaPage } from '../modal-ajuste-distancia/modal-ajuste-distancia.page';

@Component({
  selector: 'app-modal-arquero-sel',
  templateUrl: './modal-arquero-sel.page.html',
  styleUrls: ['./modal-arquero-sel.page.scss'],
})
export class ModalArqueroSelPage implements OnInit {

  jugadores: string[] = 
  [
    "messi.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg"
  ];

  slideOptJugadores = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -3,
  };

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  dismissModal(){
    this.modalCtrl.dismiss(); 
  }

  async abrirAjusteDistancia(){

    const modal = await this.modalCtrl.create({
      component: ModalAjusteDistanciaPage
    });

    await modal.present();

  }

}
