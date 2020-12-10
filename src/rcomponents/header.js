import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import sty from '../app.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './../useDarkMode';
import { lightTheme, darkTheme } from './../theme';
import { GlobalStyles } from './../global';
import Toggle from '../components/Toggle';

import Home from './Home';
import Details from './Details';

 function Header() {

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div>
        <div class="bodystyle" >
        <div class="navbar" >
             <Link to="/home" className="navbara" >Home</Link>
             <Link to="/details" className="navbara" >Details</Link>
             <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        </div>
           <Route exact path="/">
               <Redirect to="/home" />
           </Route>
           <Route exact path="/ri-analyser">
               <Redirect to="/home" />
           </Route>
           <Route path="/home"><Home /></Route>
           <Route path="/details"><Details /></Route>
         </div>

      </>
    </ThemeProvider>
  );
};


export default Header;
