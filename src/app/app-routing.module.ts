import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'desafios', loadChildren: './pages/desafios/desafios.module#DesafiosPageModule' },
  { path: 'partidos', loadChildren: './pages/partidos/partidos.module#PartidosPageModule' },
  { path: 'notificaciones', loadChildren: './pages/notificaciones/notificaciones.module#NotificacionesPageModule' },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'tabs-principal', loadChildren: './pages/tabs-principal/tabs-principal.module#TabsPrincipalPageModule' },
  { path: 'detalle-equipo', loadChildren: './pages/detalle-equipo/detalle-equipo.module#DetalleEquipoPageModule' },
  { path: 'registrarse', loadChildren: './pages/registrarse/registrarse.module#RegistrarsePageModule' },
  { path: 'partidos-chat', loadChildren: './pages/partidos-chat/partidos-chat.module#PartidosChatPageModule' },
  { path: 'busqueda-cancha', loadChildren: './pages/busqueda-cancha/busqueda-cancha.module#BusquedaCanchaPageModule' },
  { path: 'info-clubs', loadChildren: './pages/info-clubs/info-clubs.module#InfoClubsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
