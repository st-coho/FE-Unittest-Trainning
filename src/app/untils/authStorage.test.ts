import { AuthStorageService } from '../core/services/authStorage.service';
import { AuthStorage } from '../core/services/authStorage.service';
import { describe, expect, it, jest } from '@jest/globals';
import { beforeEach } from 'node:test';

jest.mock('../core/services/authStorage.service');

beforeEach(() => {
	AuthStorageService.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
	const authStorageService = new AuthStorageService();
	expect(AuthStorageService).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
	expect(AuthStorageService).not.toHaveBeenCalled();

	const authStorageService = new AuthStorageService();
	expect(AuthStorageService).toHaveBeenCalledTimes(1);

	authStorageService.AuthStorageService();

	const mocksetToken = AuthStorageService.mock.setToken;
	const mockgetToken = AuthStorageService.mockgetToken.getToken;
	expect(mocksetToken.mock.calls[0][0]).toBe(getToken);
	expect(mocksetToken).toHaveBeenCalledWith(getToken);
	expect(mocksetToken).toHaveBeenCalledTimes(1);
	expect(mockgetToken.mock.calls[0][0]).toBe(getToken);
	expect(mockgetToken).toHaveBeenCalledWith(getToken);
	expect(mockgetToken).toHaveBeenCalledTimes(1);
});