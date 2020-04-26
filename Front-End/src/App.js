import React, { Component } from 'react';
import Logo from './logo.png';

import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'; 
import home from './Home/home.js';
import SignUp from './SignUp/signup.js'; 
import Diet from './Diet/diet.js';
import Fridge from './Fridge/fridge.js';
import Add from './Add/Add.js';
import SignIn from './SignIn/signin.js';
import ConfirmAdd from './Add/confirm.js';
import Delete from './Delete/delete.js';
import Recipes from './Recipes/recipes.js';
import Recipe from './Recipes/recipe.js';
import MyAccount from './MyAccount/myaccount.js';

import './App.css';
import fire from './config/fbConfig';

import {db, auth} from './config/fbConfig';


class App extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      user:{},
    }
  }


logout() {
  fire.auth().signOut();
}

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      //console.log(user);
      if (user) {
        this.setState({ user });
        //console.log("Hello");
      //localStorage.setItem('user', user.uid);
      } else {
        //console.log("Hi");
        this.setState({user : null});
      //localStorage.removeItem('user');
      }
    });
  }

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

            {this.state.user ? (<Link to = "/Fridge" className = "home-link"  >fridge</Link>) : (<Link to = "/SignIn" className = "home-link"  >sign in</Link>)}

            {this.state.user ? (<Link to = "/diet" className = "home-link"  >diet</Link>) : (null)}

						<button type="submit" 
						onClick = {this.logout} 
						value = "next>" 
						class = "home-link pull-right">Log Out
						</button>


          </div>
        </nav>

        {/* Page Content */}
      <div className="main-container">
          {/* Routing different pages */}
          {this.state.user ? (<Redirect to = "/fridge"/>) : (<Redirect to = "/"/>)}
          <Route exact path="/" component={home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/diet" component={Diet} />
          <Route exact path="/fridge" component={Fridge} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/confirm" component={ConfirmAdd} />
          <Route exact path="/delete" component={Delete} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/recipe" component={Recipe} />
          <Route exact path="/myaccount" component={MyAccount} />


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
