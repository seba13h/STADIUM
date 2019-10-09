import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-galletear',
  templateUrl: './modal-galletear.page.html',
  styleUrls: ['./modal-galletear.page.scss'],
})
export class ModalGalletearPage implements OnInit {

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

  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true 
  };

  public galleta: boolean;

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
