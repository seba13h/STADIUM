import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//googloe
import { AuthService as AuthServiceGogle, GoogleLoginProvider } from 'angular5-social-login';
declare var FB: any;
@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	constructor(
		private socialAuthService: AuthServiceGogle,
		private router: Router
	) { }

	ngOnInit() {

		(window as any).fbAsyncInit = function () {
			FB.init({
				appId: '2394543037500224',
				cookie: true,
				xfbml: true,
				version: 'v3.3'
			});
			FB.AppEvents.logPageView();
		};
		(function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) { return; }
			js = d.createElement(s); js.id = id;
			js.src = "https://connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

	}
	/**
	   * login google
	   */
	public signinWithGoogle() {
		let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
		this.socialAuthService.signIn(socialPlatformProvider)
			.then((userData) => {
				console.log(userData);
				localStorage.setItem('DataUser', JSON.stringify(userData));
				localStorage.setItem('Islogin', JSON.stringify('redsocialgoogle'));
				this.router.navigateByUrl('/registrarse'); // Main page
								
			});
	}

	signinWithFacebook() {
		let that = this;
		FB.login((response) => {
			if (response.authResponse) {
				FB.api('/me?fields= id,name,email, picture', function (response) {
					localStorage.setItem('DataUser', JSON.stringify(response));
					localStorage.setItem('Islogin', JSON.stringify('redsocialfb'));
					that.router.navigateByUrl('/registrarse'); // Main page
				})
			}
			else {
				console.log('User login failed');
			}
		});


	}
	Registrarse() {
		let that = this;
		localStorage.setItem('Islogin', JSON.stringify('formulario'));
		that.router.navigateByUrl('/registrarse'); // Main page
	}

}
