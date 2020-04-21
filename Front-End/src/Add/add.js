import React, { Component } from "react";
import './add.css';

import { Route, Link } from 'react-router-dom'; 

export class Add extends Component {

    render() {
      return (
          <div className="Add">
              <div className="add-content"> 
                <h>What Do You Want To Add?</h>
                <input type="text" placeholder="item" className="input-item" />
                <div className="add-buttons">
                    <Link to="/fridge">
                        <button>Back</button>
                    </Link> 
                    <Link to="/fridge">
                        <button>Next</button>
                    </Link> 
                </div>
              </div>
          </div>
      );
    }
  }
   
  export default Add;