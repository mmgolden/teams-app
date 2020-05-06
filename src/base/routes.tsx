import React from 'react';
import { Redirect } from 'react-router';
import { LoginPage } from '../pages/login';
import { ProfilePage } from '../pages/profile';

export const publicRoutes = [
  {
    path: '/signin',
    exact: true,
    component: LoginPage,
  },
  {
    path: '*',
    component: () => <Redirect to="/signin" />,
  },
];

export const privateRoutes = [
  {
    path: '/home',
    exact: true,
    component: ProfilePage,
  },
  {
    path: '*',
    component: () => <Redirect to="/home" />,
  },
];
