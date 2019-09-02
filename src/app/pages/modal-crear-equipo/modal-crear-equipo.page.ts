import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalArqueroSelPage } from '../modal-arquero-sel/modal-arquero-sel.page';

@Component({
  selector: 'app-modal-crear-equipo',
  templateUrl: './modal-crear-equipo.page.html',
  styleUrls: ['./modal-crear-equipo.page.scss'],
})
export class ModalCrearEquipoPage implements OnInit {

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
  ];

  regiones = [
    {
      nombre: 'I de Tarapacá',
      seleccionado: true
    },
    {
      nombre: 'II de Antofagasta ',
      seleccionado: false
    },
    {
      nombre: 'III de Atacama',
      seleccionado: false
    },
    {
      nombre: 'IV de Coquimbo',
      seleccionado: false
    },
    {
      nombre: 'V de Valparaíso',
      seleccionado: false
    },
    {
      nombre: 'VI del Libertador General Bernardo OHiggins',
      seleccionado: false
    },
    {
      nombre: 'VII del Maule',
      seleccionado: false
    },
    {
      nombre: 'IX de la Araucanía',
      seleccionado: false
    },
    {
      nombre: 'X de Los Lagos',
      seleccionado: false
    },
    {
      nombre: 'XI de Aysén del General Carlos Ibañez del Campo ',
      seleccionado: false
    },
    {
      nombre: 'XII de Magallanes y de la Antártica Chilena',
      seleccionado: false
    },
    {
      nombre: 'Metropolitana de Santiago',
      seleccionado: false
    },
    {
      nombre: 'XIV de Los Ríos',
      seleccionado: false
    },
    {
      nombre: 'XV de Arica y Parinacota',
      seleccionado: false
    },
    {
      nombre: 'XVI del Ñuble',
      seleccionado: false
    }
  ];

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }
 
  dismissModal(){
    this.modalCtrl.dismiss(); 
  }

  guardarEquipo(){
    this.modalCtrl.dismiss();
  }

  async abrirModalArquerosSel(){

    const modal = await this.modalCtrl.create({
      component: ModalArqueroSelPage
    });

    await modal.present();

  }

}
