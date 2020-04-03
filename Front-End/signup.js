import React, { Component } from "react";
import './signup.css';

import { Route, Link } from 'react-router-dom'; 
import Diet from '../Diet/diet.js'; 


export class SignUp extends Component {

    render() {
      return (
          <div className="SignUp">
            <Route exact path="/diet" component={Diet} />

              <div className="signup-content"> 
                <div className="signup-container">
                    <h2>Sign Up</h2>
                    <input type="text" placeholder="Email" className="input-email" />
                    <p></p>
                    <input type="text" placeholder="Username" className="input-username" />
                    <p></p>
                    <input type="text" placeholder="Password" className="input-password" />
                    <p></p>
                    <input type="text" placeholder="Confirm Password" className="input-confirmpassword" />
                    <p></p>
                    <div className="signup-button">
                    <Link to="/diet">
                        <button>Next</button>
                    </Link> 
                    </div>
                </div>   
              
              </div>
          </div>
      );
    }
  }
   
  export default SignUp;