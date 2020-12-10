import React, {Component} from 'react';
import {render} from 'react-dom';
import './app.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {

  state = {  themeflavour: "dark"  };

  toggleTheme =(colorCode) =>{
        this.state.themeflavour=colorCode;
        alert("colorCode >>  "+this.state.themeflavour)

  }

  render() {

    return (
      <div>
          <ThemeProvider theme={this.state.themeflavour === 'light' ? lightTheme : darkTheme}>
           <GlobalStyles />
           <button onClick={() => this.toggleTheme("light")}>Toggle theme</button>
           <button onClick={() => this.toggleTheme("dark")}>Toggle theme</button>

            <Header />
            <Footer />

          </ThemeProvider>

      </div>
    )
  }
}

export default App;
