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

         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li class="nav-item active" styles={styles.bigblue}>
                <Link to="/home" className="nav-link">Home</Link>
              </li>
              <li class="nav-item">
              <Link to="/details" className="nav-link">Details</Link>
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
