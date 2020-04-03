import React, { Component } from "react";
import './fridge.css';

import { Route, Link } from 'react-router-dom'; 
import { findAllByDisplayValue } from "@testing-library/react";

export class Fridge extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          empty: true
        };
    }

    render() {
        const empty = this.state.empty;
        let fridge;

        {/* Conditionally renders the fridge display based on if there are items or not */}  
        if(empty){
            fridge = (
                <div className="fridge-content"> 
                <div className="fridge-container">
                    <h2>My Fridge</h2>

                </div>   
                
                <div className="fridge-begin">
                    <h3>Let's Begin!</h3>
                    <Link to="/add">
                        <button>+Add Item</button>
                    </Link> 
                </div>
              
              </div>
            )
        }

      return (
          <div className="Fridge">
              {fridge}
          </div>
      );
    }
  }
   
  export default Fridge;