import React from 'react';
import { renderRoutes } from 'react-router-config';
import { publicRoutes } from '../base/routes';

export const Routes: React.FC = () => {
  return renderRoutes(publicRoutes);
};
