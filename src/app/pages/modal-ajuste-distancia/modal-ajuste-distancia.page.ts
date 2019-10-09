import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-modal-ajuste-distancia',
  templateUrl: './modal-ajuste-distancia.page.html',
  styleUrls: ['./modal-ajuste-distancia.page.scss']
})
export class ModalAjusteDistanciaPage implements OnInit {

  kmVal: string;
  rangoEdadVal: { lower: number, upper: number } = { 
    lower: 18,
    upper: 45
  };

  constructor( private modalCtrl: ModalController, public platform: Platform ) { 
    this.platform.ready().then(()=>{
      this.kmVal = '20';
    });
    
  }

  ngOnInit() {
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
