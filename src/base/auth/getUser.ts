import axios, { AxiosResponse } from 'axios';

interface Options {
  authentication: AxiosResponse<any> | undefined;
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
        Authorization: `${authentication.data.token_type} ${authentication.data.access_token}`,
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    console.log({ user });
  } catch (error) {
    handleErrors();
  }

  return user;
};
