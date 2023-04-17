import { describe, expect, it, jest } from '@jest/globals';
import { AuthStorageService } from './authStorage.service';

describe('test authStorage service', () => {

	const authStorageService = new AuthStorageService();
	const getItemMocks = jest.spyOn(Storage.prototype, 'getItem');
	const setItemMocks = jest.spyOn(Storage.prototype, 'setItem');
	const removeItemMocks = jest.spyOn(Storage.prototype, 'removeItem');

	it('getItem called once', () => {
		authStorageService.getToken();
		expect(getItemMocks).toBeCalledTimes(1);
		expect(getItemMocks).toBeCalled();
		expect(getItemMocks).toBeCalledWith('token');
	});

	it('setItem called with correct parameter', () => {
		authStorageService.setToken('FE');
		expect(setItemMocks).toBeCalled();
		expect(setItemMocks).toBeCalledTimes(1);
		expect(setItemMocks).toBeCalledWith('token', 'Supremetech');
	});

	it('removeItem called', () => {
		authStorageService.removeToken();
		expect(removeItemMocks).toBeCalled();
		expect(removeItemMocks).toBeCalledWith('token');
		expect(removeItemMocks).toBeCalledTimes(1);
	});
})
