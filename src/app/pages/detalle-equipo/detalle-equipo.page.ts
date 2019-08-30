import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

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

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async desafioAlert() {
    const alert = await this.alertCtrl.create({
      header: '¡Ponte a entrenar!',
      subHeader: 'Has desafiado a Barcelona',
      message: 'Debes esperar a que responda a la solicitud, se te notificará si aceptó o rechazó el desafío',
      buttons: ['OK']
    });

    await alert.present();
  }

}
