import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCrearEquipoPage } from '../modal-crear-equipo/modal-crear-equipo.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  equipos: string[] = 
    [
      "barcelona.png", 
      "bayern.png", 
      "audax.png", 
      "colo.png", 
      "huachipato.png", 
      "manchester.png", 
      "palestino.png", 
      "sw.png"
    ];

  slideOptEquipos = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -3,
  };

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  async abrirModal(){

    const modal = await this.modalCtrl.create({
      component: ModalCrearEquipoPage
    });

    await modal.present();

  }

}
