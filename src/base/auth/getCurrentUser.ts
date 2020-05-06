import { CURRENT_USER_KEY } from '../constants';

export const getCurrentUser = () => {
  const currentUser = localStorage.getItem(CURRENT_USER_KEY);

  if (!currentUser) {
    return undefined;
  }

  try {
    return JSON.parse(currentUser);
  } catch (error) {
    return undefined;
  }
};
