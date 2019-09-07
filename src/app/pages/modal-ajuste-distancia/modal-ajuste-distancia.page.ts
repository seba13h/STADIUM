import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-ajuste-distancia',
  templateUrl: './modal-ajuste-distancia.page.html',
  styleUrls: ['./modal-ajuste-distancia.page.scss'],
})
export class ModalAjusteDistanciaPage implements OnInit {

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  dismissModal(){
    this.modalCtrl.dismiss(); 
  }

}
