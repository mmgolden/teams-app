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

const UserContext = React.createContext<IUserContext>({
  user: undefined,
  setUser: () => {},
});

const getCachedUser = (isAuthenticated: boolean) => {
  if (!isAuthenticated) {
    return undefined;
  }

  return getCurrentUser();
};

const UserProvider: React.FC<Props> = ({ isAuthenticated, children }) => {
  const cachedUser = getCachedUser(isAuthenticated);

  const [user, setUser] = React.useState<User | undefined>(cachedUser);

  const value = React.useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
