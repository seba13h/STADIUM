import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'equipos', loadChildren: './pages/equipos/equipos.module#EquiposPageModule' },
  { path: 'desafios', loadChildren: './pages/desafios/desafios.module#DesafiosPageModule' },
  { path: 'canchas', loadChildren: './pages/canchas/canchas.module#CanchasPageModule' },
  { path: 'notificaciones', loadChildren: './pages/notificaciones/notificaciones.module#NotificacionesPageModule' },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'tabs-principal', loadChildren: './pages/tabs-principal/tabs-principal.module#TabsPrincipalPageModule' },
  { path: 'detalle-equipo', loadChildren: './pages/detalle-equipo/detalle-equipo.module#DetalleEquipoPageModule' },
  { path: 'registrarse', loadChildren: './pages/registrarse/registrarse.module#RegistrarsePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
