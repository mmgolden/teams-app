import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './components/Routes';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './base/styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
