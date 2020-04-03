import React, { Component } from "react";
import './fridge.css';
import '../style.css';
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
        // var test=localStorage.getItem("food");
        // console.log(test);

        {/* Conditionally renders the fridge display based on if there are items or not */}  
        if(empty){
            fridge = (
                <div className="fridge-content"> 
                <div className="fridge-container">
                    <h2> fridge</h2>

                </div>   
                
                <div className="fridge-begin">
                    <h1 class = "main-heading">let's begin!</h1>
                    <Link to="/add">
                        <button class = "add-delete-button">+ add item</button>
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