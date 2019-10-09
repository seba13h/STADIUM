import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.page.html',
  styleUrls: ['./partidos.page.scss']
})
export class PartidosPage implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  abrirChat() {
    this.router.navigate(['/partidos-chat']);
  }
  
}
