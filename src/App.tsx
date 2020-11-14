import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';

import theme from './styles/theme';

import Main from './Main';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Main />
    </ThemeProvider>
  );
};

export default App;
