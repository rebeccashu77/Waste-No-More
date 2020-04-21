import React, { Component } from "react";
import './recipes.css';

import { Route, Link } from 'react-router-dom'; 

class Recipes extends Component {

  render() {
    return (
        <div className="Recipes">
          <div className="recipes-container">
              <div className="recipes-list">
                <h>recipe 1</h>
                <Link to="/recipe">
                    <button class = "show-recipe-button"> expand</button>
                </Link>  
              </div>
              <div className="recipes-list2">
                <h>recipe 2</h>
                <Link to="/recipe">
                    <button class = "show-recipe-button"> expand</button>
                </Link>  
              </div>
              <div className="recipes-list3">
                <h>recipe 3</h>
                <Link to="/recipe">
                    <button class = "show-recipe-button"> expand</button>
                </Link>  
              </div>   
          </div>
            <Link to="/fridge">
                <button class = "back-button"> back</button>
            </Link>  
        </div>
    );
  }
}
 
export default Recipes;