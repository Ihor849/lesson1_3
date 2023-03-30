import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
// import './index.css';
import { App } from 'components/App/App';
import { theme } from './constants';

// import styled from '@emotion/styled';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ theme }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
