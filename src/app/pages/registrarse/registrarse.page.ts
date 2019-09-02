import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  public contador: number;
  img_user: string;
  constructor() { }

  ngOnInit() {
    var dataUser = JSON.parse(localStorage.getItem('DataUser'));
    var isLogin = JSON.parse(localStorage.getItem('Islogin'));
    if (isLogin == "redsocialgoogle"){
     this.img_user = dataUser.image;
     this.contador = 2;
    }else if (isLogin == "redsocialfb"){
      this.img_user = dataUser.picture.data.url;
      this.contador = 2
    }else{
      this.img_user = "assets/jugadores/AgregarUsuario.png";
      this.contador = 1;
    }
    
  }

}
