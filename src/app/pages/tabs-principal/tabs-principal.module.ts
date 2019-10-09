import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPrincipalPage } from './tabs-principal.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPrincipalPage,
    children: [
      {
        path: 'desafios',
        loadChildren: '../desafios/desafios.module#DesafiosPageModule'
      },
      {
        path: 'partidos',
        loadChildren: '../partidos/partidos.module#PartidosPageModule'
      },
      {
        path: 'notificaciones',
        loadChildren: '../notificaciones/notificaciones.module#NotificacionesPageModule'
      },
      {
        path: 'perfil',
        loadChildren: '../perfil/perfil.module#PerfilPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPrincipalPage]
})
export class TabsPrincipalPageModule {}
