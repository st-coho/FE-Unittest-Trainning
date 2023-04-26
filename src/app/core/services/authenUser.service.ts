import { AuthStorageService } from './authStorage.service';

export class AuthenUser {
	authenUser: AuthStorageService;

	constructor() {
		this.authenUser = new AuthStorageService();
	}

	logIn(token) {
		this.authenUser.setToken(token);
	}

	getUser() {
		this.authenUser.getToken();
	}

	logOut() {
		this.authenUser.removeToken();
	}
}
