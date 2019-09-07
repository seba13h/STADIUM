import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCrearEquipoPage } from '../modal-crear-equipo/modal-crear-equipo.page';

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

  constructor( private modalCtrl: ModalController ) { }

  img_user: string;
  nombre_user: string;

  ngOnInit() {
    var dataUser = JSON.parse(localStorage.getItem('DataUser'));
    var isLogin = JSON.parse(localStorage.getItem('Islogin'));
    if (isLogin == "redsocialgoogle"){
     this.img_user = dataUser.image;
     this.nombre_user = dataUser.name;
    }else if (isLogin == "redsocialfb"){
      this.img_user = dataUser.picture.data.url;
      this.nombre_user = dataUser.name;
    }else{
      this.img_user = "assets/jugadores/AgregarUsuario.png";
    }
  }

  async abrirModal(){

    const modal = await this.modalCtrl.create({
      component: ModalCrearEquipoPage
    });

    await modal.present();

  }

}
