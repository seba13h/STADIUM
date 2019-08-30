import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
