import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-fh-desafio',
  templateUrl: './modal-fh-desafio.page.html',
  styleUrls: ['./modal-fh-desafio.page.scss']
})
export class ModalFhDesafioPage implements OnInit {

  fechaActual: Date = new Date();

  constructor( private modalCtrl: ModalController, private router: Router ) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  abrirCanchasDisponibles() {
    this.modalCtrl.dismiss();
    this.router.navigate(['/busqueda-cancha']);
  }

}
