import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
