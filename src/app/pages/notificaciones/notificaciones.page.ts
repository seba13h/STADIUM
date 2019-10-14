import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  abrirReservarCancha() {
    this.router.navigate(['/reservar-cancha']);
  }

}
