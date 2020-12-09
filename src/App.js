import React, {Component} from 'react';
import {render} from 'react-dom';
import './app.css';


import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {
  render() {

    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App;
