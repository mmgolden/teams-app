import { isAccessTokenValid } from '../isAccessTokenValid';
import MockDate from 'mockdate';
import { ACCESS_TOKEN_KEY, ACCESS_TOKEN_EXPIRATION } from '../../constants';

beforeEach(() => {
  MockDate.set('2020-05-09');
});

afterEach(() => {
  localStorage.clear();
});

const token = '123';

test('isAccessTokenValid returns false if no token or expiration', () => {
  const isValid = isAccessTokenValid();

  expect(isValid).toEqual(false);
});

test('isAccessTokenValid returns false if the token is expired', () => {
  const expiration = '2020-05-08T21:50:55.760Z';

  localStorage.setItem(ACCESS_TOKEN_KEY, token);
  localStorage.setItem(ACCESS_TOKEN_EXPIRATION, expiration);

  const isValid = isAccessTokenValid();

  expect(isValid).toEqual(false);
});

test('isAccessTokenValid returns true if token has not expired', () => {
  const expiration = '2020-05-10T21:50:55.760Z';

  localStorage.setItem(ACCESS_TOKEN_KEY, token);
  localStorage.setItem(ACCESS_TOKEN_EXPIRATION, expiration);

  const isValid = isAccessTokenValid();

  expect(isValid).toEqual(true);
});
