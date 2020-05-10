import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  CURRENT_USER_KEY,
  ACCESS_TOKEN_EXPIRATION,
  TOKEN_TYPE,
} from '../constants';
import { User } from '../../typings/user';
import { Authentication } from '../../typings/authentication';

interface Options {
  authentication: Authentication;
  user: User;
}

/**
 * Adds authentication and user to local storage
 * @param {object} authentication
 * @param {object} user
 */
export const login = ({ authentication, user }: Options) => {
  const now = new Date();
  const expirationDate = new Date(
    now.getTime() + authentication.expires_in * 1000
  );

  try {
    localStorage.setItem(TOKEN_TYPE, authentication.token_type);
    localStorage.setItem(ACCESS_TOKEN_KEY, authentication.access_token);
    localStorage.setItem(REFRESH_TOKEN_KEY, authentication.refresh_token);
    localStorage.setItem(ACCESS_TOKEN_EXPIRATION, expirationDate.toISOString());
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } catch (error) {
    console.error(error);
  }
};
