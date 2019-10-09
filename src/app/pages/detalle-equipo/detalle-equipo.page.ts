import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFhDesafioPage } from '../modal-fh-desafio/modal-fh-desafio.page';

@Component({
  selector: 'app-detalle-equipo',
  templateUrl: './detalle-equipo.page.html',
  styleUrls: ['./detalle-equipo.page.scss'],
})
export class DetalleEquipoPage implements OnInit {

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

  async abrirFHDesafio() {

    const modal = await this.modalCtrl.create({
      component: ModalFhDesafioPage
    });

    await modal.present();

  }

}
