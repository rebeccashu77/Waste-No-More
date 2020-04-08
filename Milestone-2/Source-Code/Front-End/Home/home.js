import React, { Component } from "react";
import './home.css';

import { Route, Link } from 'react-router-dom'; 
import SignUp from '../SignUp/signup.js'; 


class Home extends Component {

  render() {
    return (
        <div className="home">
            <Route exact path="/signup" component={SignUp} />

          <div className="home-overlay"></div>
          <div className="home-description">
            <h1>Waste No More</h1>
            <p>Keeping track of what's in your fridge can be hard. We're here to help.</p>  
              <div className="home-start">
                <h2>What's inside your fridge?</h2>
                <div className="search-container">
                  <Link to="/signup">
                    <button>Start</button>
                  </Link> 
                </div>
              </div>             
            
          </div>
          
        </div>
    );
  }
}
 
export default Home;