import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

import Header from './rcomponents/header';
import Footer from './rcomponents/footer';
import Home from './rcomponents/Home';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'default' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div/>
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
         <Header/>
         <Footer/>
      </>
    </ThemeProvider>
  );
};

export default App;
