import React, { Component } from "react";
import './add.css';
import '../style.css';

import { Route, Link } from 'react-router-dom'; 

export class Add extends Component {

    render() {

      return (
          <div className="Add">
              <div className="add-content"> 
                <h>what do you want to add?</h>
                <input type="text" placeholder="item" className="input-item" />
                <div className="add-buttons">
                    <Link to="/fridge">
                        <button class = "back-button next-button"> back</button>
                    </Link> 
                    <Link to="/confirm">
                        <button class = "next-button">next></button>
                    </Link> 
                </div>
              </div>
          </div>
      );
    }
  }
   
  export default Add;