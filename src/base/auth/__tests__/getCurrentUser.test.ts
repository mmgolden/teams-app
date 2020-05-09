import { getCurrentUser } from '../getCurrentUser';
import { CURRENT_USER_KEY } from '../../constants';
import { userFactory } from '../../../__testUtils__/factories';

afterEach(() => {
  localStorage.clear();
});

test('getCurrentUser returns undefined if no user', () => {
  const currentUser = getCurrentUser();

  expect(currentUser).toEqual(undefined);
});

test('getCurrentUser returns current user', () => {
  const user = userFactory();
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));

  const currentUser = getCurrentUser();

  expect(currentUser).toEqual(user);
});
