import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalAjusteDistanciaPage } from '../modal-ajuste-distancia/modal-ajuste-distancia.page';
import { ModalCrearEquipoPage } from '../modal-crear-equipo/modal-crear-equipo.page';

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

  constructor( private modalCtrl: ModalController, public alertCtrl: AlertController ) { }

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

  redireccion(){
    this.dismissModal();
    this.dismissModal();
    return 'tabs-principal/perfil';
  }

  async invitarJugadorAlert() {
    const alert = await this.alertCtrl.create({
      header: '¡Invitación enviada satisfactoriamente!',
      message: 'Debes esperar a que el jugador instale la aplicación y responda a la solicitud para que sea parte de tu equipo, se te notificará si aceptó o rechazó la invitación',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async elegirJugadorAlert() {
    const alert = await this.alertCtrl.create({
      header: '¡Invitación enviada satisfactoriamente!',
      message: 'Debes esperar a que el jugador responda a la solicitud para que sea parte de tu equipo, se te notificará si aceptó o rechazó la invitación',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
