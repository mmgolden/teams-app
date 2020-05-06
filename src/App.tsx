import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './components/Routes';
import { ThemeProvider } from 'emotion-theming';
import { AuthProvider } from './components/AuthProvider';
import { theme } from './base/styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
