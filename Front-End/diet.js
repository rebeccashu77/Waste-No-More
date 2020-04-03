import React, { Component } from "react";
import './diet.css';

import { Route, Link } from 'react-router-dom'; 

export class Diet extends Component {

    render() {
      return (
          <div className="Diet">
              <div className="diet-content"> 
                <div className="diet-container">
                    <h2>Select your dietary preferences</h2>

                    <label className="vegetarian">
                        <input type="checkbox" className="input-vegetarian"  />
                        vegetarian
                    </label>
                    <label className="vegan">
                        <input type="checkbox" className="input-vegan"  />
                        vegan
                    </label>
                    <label className="pescatarian">
                        <input type="checkbox" className="input-pescatarian"  />
                        pescatarian
                    </label>
                    <label className="peanut-free">
                        <input type="checkbox" className="input-peanutfree"  />
                        peanut-free
                    </label>
                    <label className="gluten-free">
                        <input type="checkbox" className="input-glutenfree"  />
                        gluten-free
                    </label>
                    <label className="dairy-free">
                        <input type="checkbox" className="input-dairyfree"  />
                        dairy-free
                    </label>

                    <div className="diet-button">
                    <Link to="/signup">
                        <button> Back</button>
                    </Link> 
                    <Link to="/fridge">
                        <button>Next</button>
                    </Link> 
                    </div>
                </div>   
              
              </div>
          </div>
      );
    }
  }
   
  export default Diet;