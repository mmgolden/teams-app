import React from 'react';
import { render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import { ProfilePage } from '../ProfilePage';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../../../base/styled';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { Specialist } from '../../../typings/specialist';
import { specialistFactory } from '../../../__testUtils__/factories';
import { ACCESS_TOKEN_KEY, TOKEN_TYPE } from '../../../base/constants';

const currentSpecialist: Specialist = specialistFactory();

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(() => {
  localStorage.clear();
});

test('Fetches and displays data', async () => {
  const history = createMemoryHistory();
  history.push('/home');

  localStorage.setItem(ACCESS_TOKEN_KEY, '123');
  localStorage.setItem(TOKEN_TYPE, 'Bearer');

  mockedAxios.get.mockResolvedValueOnce({ data: { data: currentSpecialist } });

  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <ProfilePage />
      </Router>
    </ThemeProvider>
  );
  await wait();

  expect(mockedAxios.get).toHaveBeenCalled();
  getByText(/michael scott/i);
});
