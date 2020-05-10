import React from 'react';
import { User } from '../typings/user';
import { getCurrentUser } from '../base/auth/getCurrentUser';

interface Props {
  isAuthenticated: boolean;
}

interface IUserContext {
  user?: User;
  setUser: (user?: User) => void;
}

// Creates the user context
const UserContext = React.createContext<IUserContext>({
  user: undefined,
  setUser: () => {},
});

// Check if there is a currently authenticated user
const getCachedUser = (isAuthenticated: boolean) => {
  if (!isAuthenticated) {
    return undefined;
  }

  return getCurrentUser();
};

// UserProvider is used to get or set the current user anywhere in the app
const UserProvider: React.FC<Props> = ({ isAuthenticated, children }) => {
  const cachedUser = getCachedUser(isAuthenticated);

  const [user, setUser] = React.useState<User | undefined>(cachedUser);

  const value = React.useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
