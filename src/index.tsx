import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '@components/App';
import ErrorBoundary from '@components/ErrorBoundary';
import theme from './theme';

import GlobalStyle from './globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle />
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Router>
  </ThemeProvider>,
);
