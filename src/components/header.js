import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './../app.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import Details from './Details';


class Header extends React.Component{
  render(){
      return (
          <div>

          <nav class="navbar navbar-expand-sm bg-primary" >
            <ul class="navbar-nav">
              <li class="nav-item active" styles={styles.bigblue}>
                <Link to="/home">Home</Link>
              </li>
              <li class="nav-item">
              <Link to="/details">Details</Link>
              </li>

            </ul>
            </nav>

            { /* Route components are rendered if the path prop matches the current URL */}
            <Route path="/home"><Home /></Route>
            <Route path="/details"><Details /></Route>
          </div>
        );
  }
}
export default Header;
