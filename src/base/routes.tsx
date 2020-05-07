import React from 'react';
import { Redirect } from 'react-router';
import { LoginPage } from '../pages/login';
import { ProfilePage } from '../pages/profile';
import { ROUTES } from './constants';

export const publicRoutes = [
  {
    path: ROUTES.SIGN_IN,
    exact: true,
    component: LoginPage,
  },
  {
    path: '*',
    component: () => <Redirect to={ROUTES.SIGN_IN} />,
  },
];

export const privateRoutes = [
  {
    path: ROUTES.HOME,
    exact: true,
    component: ProfilePage,
  },
  {
    path: '*',
    component: () => <Redirect to={ROUTES.HOME} />,
  },
];
