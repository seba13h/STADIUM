import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccionar-cancha',
  templateUrl: './seleccionar-cancha.page.html',
  styleUrls: ['./seleccionar-cancha.page.scss'],
})
export class SeleccionarCanchaPage implements OnInit {

  constructor( public alertController: AlertController, private router: Router ) { }

  ngOnInit() {
  }

  async defafioAlert() {
    const alert = await this.alertController.create({
      header: '¡Ponte a entrenar!',
      message: 'Se notificó a Bayern que lo desafiaste, solo queda esperar a que acepte el desafío.',
      buttons: ['OK']
    });

    await alert.present();
    this.router.navigate(['/tabs-principal/desafios']);
  }

}
