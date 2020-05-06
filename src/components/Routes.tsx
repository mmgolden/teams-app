import React from 'react';
import { renderRoutes } from 'react-router-config';
import { UserContext } from './UserProvider';
import { publicRoutes, privateRoutes } from '../base/routes';

export const Routes: React.FC = () => {
  const { user } = React.useContext(UserContext);
  const routes = user ? privateRoutes : publicRoutes;

  return renderRoutes(routes);
};
