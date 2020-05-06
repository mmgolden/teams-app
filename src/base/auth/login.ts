import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  CURRENT_USER_KEY,
} from '../constants';
import { User } from '../../typings/user';
import { Authentication } from '../../typings/authentication';

interface Options {
  authentication: Authentication;
  user: User;
}

export const login = ({ authentication, user }: Options) => {
  try {
    localStorage.setItem(ACCESS_TOKEN_KEY, authentication.access_token);
    localStorage.setItem(REFRESH_TOKEN_KEY, authentication.refresh_token);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } catch (error) {
    console.error(error);
  }
};
