import React, { Component } from "react";
import './myaccount.css';

import { Route, Link } from 'react-router-dom'; 

class MyAccount extends Component {

  render() {
    return (
        <div className="MyAccount">
          <div className="account-container">
              <div className="account-list">
                  <h1>dietary preferences</h1>
              </div>  
              <div className="account-list2">
                  <h1>my account</h1>
                  
              </div>  
          </div>
            <Link to="/Fridge">
                <button class = "back-button"> back</button>
            </Link>  
        </div>
    );
  }
}
 
export default MyAccount;