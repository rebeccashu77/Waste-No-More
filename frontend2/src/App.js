import React, { Component } from 'react';
import Logo from './logo.png';

import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import home from './Home/home.js';
import SignUp from './SignUp/signup.js'; 
import Diet from './Diet/diet.js';
import Fridge from './Fridge/fridge.js';
import Add from './Add/add.jsx';
import SignIn from './SignIn/signin.js';
import ConfirmAdd from './Add/confirm.js';

import './App.css';

class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-md">
          <div className="navigation-sub">
            <Link to="/" className="item">
              <img src={Logo} className="logo-image" alt="Logo" />
            </Link>

            <Link to="/" className="home-link">home</Link>

            <Link to="/signin" className="home-link">sign in</Link>

          </div>
        </nav>

        {/* Page Content */}
      <div className="main-container">
          {/* Routing different pages */}
          <Route exact path="/" component={home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/diet" component={Diet} />
          <Route exact path="/fridge" component={Fridge} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/confirm" component={ConfirmAdd} />


        {/* Footer */}
        <footer className="page-footer">
            <p>This website was created for Compsci316 at Duke University.</p>
            <p>For more information, please visit them at their website at github.com</p>
        </footer>
        
        </div>
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
