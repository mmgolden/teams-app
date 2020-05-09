import React from 'react';
import { render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../../../base/styled';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { ACCESS_TOKEN_KEY, TOKEN_TYPE } from '../../../base/constants';
import { ProjectPage } from '../ProjectPage';
import { Project } from '../../../typings/project';
import { projectFactory } from '../../../__testUtils__/factories';

const project: Project = projectFactory();

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(() => {
  localStorage.clear();
});

test('Fetches and displays data', async () => {
  const history = createMemoryHistory();
  history.push('/projects/1');

  localStorage.setItem(ACCESS_TOKEN_KEY, '123');
  localStorage.setItem(TOKEN_TYPE, 'Bearer');

  mockedAxios.get.mockResolvedValueOnce({ data: { data: project } });

  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <ProjectPage />
      </Router>
    </ThemeProvider>
  );
  await wait();

  expect(mockedAxios.get).toHaveBeenCalled();
  getByText(/schrute farms/i);
  getByText(/dunder mifflin/i);
});
