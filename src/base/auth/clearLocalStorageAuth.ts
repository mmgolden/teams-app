import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  CURRENT_USER_KEY,
  ACCESS_TOKEN_EXPIRATION,
  TOKEN_TYPE,
} from '../constants';

export const clearLocalStorageAuth = () => {
  localStorage.removeItem(TOKEN_TYPE);
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(ACCESS_TOKEN_EXPIRATION);
  localStorage.removeItem(CURRENT_USER_KEY);
};
