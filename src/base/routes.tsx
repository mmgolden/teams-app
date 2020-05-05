import React from 'react';
import { Redirect } from 'react-router';
import { LoginPage } from '../pages/login';

export const publicRoutes = [
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '*',
    component: () => <Redirect to="/login" />,
  },
];

export const privateRoutes = [];
