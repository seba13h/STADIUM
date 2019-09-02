import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
// login google
import { SocialLoginModule, AuthServiceConfig } from "angular5-social-login";
import { GoogleLoginProvider } from "angular5-social-login";
import { HttpClientModule } from '@angular/common/http';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("194570480515-rmu8j26v59jhmvnrf9d6qaeohcij6l7f.apps.googleusercontent.com")
  }
]);
export function provideConfig() {
	return config;
  }

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SocialLoginModule,
		HttpClientModule
  ],providers: [
		{
			provide: AuthServiceConfig,
      		useFactory: provideConfig
		}
	],
  declarations: [LoginPage]
})
export class LoginPageModule {}
