import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-principal',
  templateUrl: './tabs-principal.page.html',
  styleUrls: ['./tabs-principal.page.scss'],
})
export class TabsPrincipalPage implements OnInit {

  desafiosIcon = '../assets/icon/fist.svg';
  clickedDesafiosIcon = '../assets/icon/fist-full.svg';
  canchasIcon = '../assets/icon/cancha.svg';
  clickedCanchasIcon = '../assets/icon/cancha-full.svg';
  perfilIcon = '../assets/icon/futbolista.svg';
  clickedPerfilIcon = '../assets/icon/futbolista-full.svg';
  notificacionesIcon = '../assets/icon/notificaciones.svg';
  clickedNotificacionesIcon = '../assets/icon/notificaciones-full.svg'; 


  isDesafiosSelected = false;
  isCanchasSelected = false;
  isNotificacionesSelected = false; 
  isPerfilSelected = true;

  constructor() { }

  ngOnInit() {
  }

  changeDesafiosIcon(): void {    
    this.resetAll();
    this.isDesafiosSelected = true;
  }

  changeCanchasIcon(): void {
    this.resetAll();
    this.isCanchasSelected = true;
  }
  changeNotificacionesIcon(): void {
    this.resetAll();
    this.isNotificacionesSelected = true;
  }

  changePerfilIcon(): void {
    this.resetAll();
    this.isPerfilSelected = true;
  }

  resetAll(){
    this.isDesafiosSelected = false;
    this.isCanchasSelected = false;
    this.isNotificacionesSelected = false;
    this.isPerfilSelected = false;
  }

}
