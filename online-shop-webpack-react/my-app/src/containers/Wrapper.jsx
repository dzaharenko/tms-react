import React from 'react';
import {useSelector} from 'react-redux';

import {ThemeProvider} from 'react-jss';
import themes from '../styles/themes';
import App from "./App";

const Wrapper = () => {
  const isLightTheme = useSelector(state => state.app.lightTheme);
  const currentTheme = isLightTheme ? 'light' : 'dark';

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <App />
    </ThemeProvider>
  );
};

Wrapper.displayName = 'Wrapper';

export default Wrapper;
