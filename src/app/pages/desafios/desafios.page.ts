import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-desafios',
  templateUrl: './desafios.page.html',
  styleUrls: ['./desafios.page.scss'],
})
export class DesafiosPage implements OnInit {

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

  constructor( private loadingCtrl: LoadingController ) { }

  ngOnInit() {
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Buscando oponentes en tu zona... ',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
