import axios from 'axios';
import { Authentication } from '../../typings/authentication';

interface Options {
  authentication?: Authentication;
  handleErrors: () => void;
}

export const getUser = async ({ authentication, handleErrors }: Options) => {
  if (!authentication) {
    return;
  }

  let user;

  // Get user from API
  try {
    user = await axios.get(`${process.env.REACT_APP_API_URL}/user`, {
      headers: {
        Authorization: `${authentication.token_type} ${authentication.access_token}`,
        'X-Requested-With': 'XMLHttpRequest',
      },
    });
  } catch (error) {
    handleErrors();
  }

  return user;
};
