import { clearLocalStorageAuth } from '../clearLocalStorageAuth';
import {
  TOKEN_TYPE,
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  ACCESS_TOKEN_EXPIRATION,
  CURRENT_USER_KEY,
} from '../../constants';
import { userFactory } from '../../../__testUtils__/factories';

afterEach(() => {
  localStorage.clear();
});

const tokenType = 'Bearer';
const accessToken = '123';
const refreshToken = '456';
const expiration = '2020-05-08T21:50:55.760Z';
const user = userFactory();

test('clearLocalStorageAuth clears auth from local storage', () => {
  localStorage.setItem(TOKEN_TYPE, tokenType);
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  localStorage.setItem(ACCESS_TOKEN_EXPIRATION, expiration);
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));

  expect(localStorage.getItem(TOKEN_TYPE)).toBeTruthy();
  expect(localStorage.getItem(ACCESS_TOKEN_KEY)).toBeTruthy();
  expect(localStorage.getItem(REFRESH_TOKEN_KEY)).toBeTruthy();
  expect(localStorage.getItem(ACCESS_TOKEN_EXPIRATION)).toBeTruthy();
  expect(localStorage.getItem(CURRENT_USER_KEY)).toBeTruthy();

  clearLocalStorageAuth();

  expect(localStorage.getItem(TOKEN_TYPE)).toBeFalsy();
  expect(localStorage.getItem(ACCESS_TOKEN_KEY)).toBeFalsy();
  expect(localStorage.getItem(REFRESH_TOKEN_KEY)).toBeFalsy();
  expect(localStorage.getItem(ACCESS_TOKEN_EXPIRATION)).toBeFalsy();
  expect(localStorage.getItem(CURRENT_USER_KEY)).toBeFalsy();
});
