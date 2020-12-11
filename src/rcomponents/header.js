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
        <div  >
        <div class="navbar" >
             <table><tr><td>
             <Link to="/ri-analyser/home" className="navbara" >Home</Link>
             </td><td>
             <Link to="/ri-analyser/details" className="navbara" >Details</Link>
             </td></tr></table>
             <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        </div>
           <Route exact path="/">
               <Redirect to="/ri-analyser/home" />
           </Route>

           <Route exact path="/ri-analyser">
               <Redirect to="/ri-analyser/home" />
           </Route>
           <Route path="/ri-analyser/home"><Home theme={theme} toggleTheme={toggleTheme} /></Route>
           <Route path="/ri-analyser/details"><Details /></Route>
         </div>

      </>
    </ThemeProvider>
  );
};


export default Header;
