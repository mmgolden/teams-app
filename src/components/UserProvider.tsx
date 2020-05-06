import React from 'react';
import { User } from '../typings/user';

interface IUserContext {
  user?: User;
  setUser: (user: User) => void;
}

const UserContext = React.createContext<IUserContext>({
  user: undefined,
  setUser: () => {},
});

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<User | undefined>(undefined);

  const value = React.useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
