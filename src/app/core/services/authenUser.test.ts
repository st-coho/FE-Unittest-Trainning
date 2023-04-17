import { describe, expect, it, jest } from '@jest/globals';
import { AuthStorageService } from './authStorage.service';
import { AuthenUser } from './authenUser.service';

describe('AuthenUser', () => {
	const authenUser = new AuthenUser();
	
	it('logIn called', () => {
		const setTokenMocks = jest.spyOn(AuthStorageService.prototype, 'setToken');
		const token = 'token';
		authenUser.logIn(token);
		expect(setTokenMocks).toBeCalled();
		expect(setTokenMocks).lastCalledWith();
		expect(setTokenMocks).lastCalledWith('token');
		expect(setTokenMocks).toBeCalledTimes(1);
	});

	it('logOut called', () => {
		const removeTokenMocks = jest.spyOn(AuthStorageService.prototype, 'removeToken')
		authenUser.logOut();
		expect(removeTokenMocks).toBeCalled();
		expect(removeTokenMocks).toBeCalledTimes(1);
	});

	it('getUser called', () => {
		const getTokenMocks = jest.spyOn(AuthStorageService.prototype, 'getToken')
		authenUser.getUser();
		expect(getTokenMocks).toBeCalled();
		expect(getTokenMocks).toBeCalledTimes(1);
	})
})