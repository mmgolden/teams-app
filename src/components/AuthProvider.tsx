import React from 'react';
import { UserProvider } from './UserProvider';
import { isAccessTokenValid } from '../base/auth/isAccessTokenValid';

export const AuthProvider: React.FC = ({ children }) => {
  return (
    <UserProvider isAuthenticated={isAccessTokenValid()}>
      {children}
    </UserProvider>
  );
};
