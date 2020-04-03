import React, { Component } from "react";
import './add.css';
import '../style.css';

import { Route, Link } from 'react-router-dom'; 

export class ConfirmAdd extends Component {

    render() {

      return (
          <div className="Add">
              <div className="add-content"> 
                    <h>add (insert js variable)</h>
                <img alt = "pull image from source"></img>
                <div className="add-buttons">
                    <Link to="/fridge">
                        <button class = "back-button next-button">back</button>
                    </Link> 
                    <Link to="/fridge">
                        <button class = "next-button">next></button>
                    </Link> 
                </div>
              </div>
          </div>
      );
    }
  }
   
  export default ConfirmAdd;