import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda-cancha',
  templateUrl: './busqueda-cancha.page.html',
  styleUrls: ['./busqueda-cancha.page.scss']
})
export class BusquedaCanchaPage implements OnInit {

  constructor( private modalCtrl: ModalController, private router: Router ) { }

  ngOnInit() {
  }

  abrirInfoCancha() {
    this.router.navigate(['/info-clubs']);
  }

  abrirVerCanchas() {
    this.router.navigate(['/ver-canchas']);
  }
}
