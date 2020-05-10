import { ACCESS_TOKEN_KEY, ACCESS_TOKEN_EXPIRATION } from '../constants';

/**
 * Checks if the access token has not expired
 * @returns {boolean}
 */
export const isAccessTokenValid = () => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  const expirationDate = localStorage.getItem(ACCESS_TOKEN_EXPIRATION);

  if (!token || !expirationDate) {
    return false;
  }

  const now = new Date();
  return now.toISOString() < expirationDate;
};
