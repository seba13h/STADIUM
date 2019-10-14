import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-canchas',
  templateUrl: './ver-canchas.page.html',
  styleUrls: ['./ver-canchas.page.scss'],
})
export class VerCanchasPage implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  abrirSeleccionarCancha() {
    this.router.navigate(['/seleccionar-cancha']);
  }

}
