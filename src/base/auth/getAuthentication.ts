import axios from 'axios';

interface Options {
  username: string;
  password: string;
  handleErrors: () => void;
}

export const getAuthentication = async ({
  username,
  password,
  handleErrors,
}: Options) => {
  let authentication;

  // Get token from API
  try {
    authentication = await axios.post(`${process.env.REACT_APP_TOKEN_URL}`, {
      username,
      password,
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
      grant_type: process.env.REACT_APP_GRANT_TYPE,
      scope: process.env.REACT_APP_SCOPE,
    });

    console.log({ authentication });
  } catch (error) {
    handleErrors();
  }

  return authentication;
};
