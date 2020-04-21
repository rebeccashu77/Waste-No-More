import React, { Component } from "react";
import './delete.css';
import '../style.css';

import { Route, Link } from 'react-router-dom'; 

export class Delete extends Component {

    render() {

      return (
          <div className="Delete">
              <div className="delete-content"> 
                    <h>delete (insert js variable)?</h>
                <img alt = "pull image from source"></img>
                <div className="delete-buttons">
                    <Link to="/fridge">
                        <button class = "back-button">back</button>
                    </Link> 
                    <Link to="/fridge">
                        <button class = "next-button">yes</button>
                    </Link> 
                </div>
              </div>
          </div>
      );
    }
  }
   
  export default Delete;