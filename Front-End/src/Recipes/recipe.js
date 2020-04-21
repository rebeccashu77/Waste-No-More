import React, { Component } from "react";
import './recipe.css';

import { Route, Link } from 'react-router-dom'; 

class Recipe extends Component {

  render() {
    return (
        <div className="Recipe">
          <div className="recipe-container">
              <h>recipe</h>
              <div className="recipe-list">
                  <h1>ingredients</h1>
                  <h1>instructions</h1>
              </div>  
          </div>
            <Link to="/Recipes">
                <button class = "back-button"> back</button>
            </Link>  
        </div>
    );
  }
}
 
export default Recipe;