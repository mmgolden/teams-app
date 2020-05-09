import { login } from '../login';
import { userFactory } from '../../../__testUtils__/factories';
import MockDate from 'mockdate';
import {
  TOKEN_TYPE,
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  ACCESS_TOKEN_EXPIRATION,
  CURRENT_USER_KEY,
} from '../../constants';

beforeEach(() => {
  MockDate.set('2020-05-09');
});

afterEach(() => {
  localStorage.clear();
});

const authentication = {
  token_type: 'Bearer',
  access_token: '123',
  refresh_token: '456',
  expires_in: 18000,
};

const user = userFactory();

test('login sets local storage auth', () => {
  login({ authentication, user });

  expect(localStorage.getItem(TOKEN_TYPE)).toEqual(authentication.token_type);
  expect(localStorage.getItem(ACCESS_TOKEN_KEY)).toEqual(
    authentication.access_token
  );
  expect(localStorage.getItem(REFRESH_TOKEN_KEY)).toEqual(
    authentication.refresh_token
  );
  expect(localStorage.getItem(ACCESS_TOKEN_EXPIRATION)).toEqual(
    '2020-05-09T05:00:00.000Z'
  );
  expect(JSON.parse(localStorage.getItem(CURRENT_USER_KEY))).toEqual(user);
});
