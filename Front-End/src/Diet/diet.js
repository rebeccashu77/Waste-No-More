import React, { Component } from "react";
import './diet.css';
import {Row, Col} from "react-bootstrap";
import '../style.css';

import { Route, Link } from 'react-router-dom'; 

export class Diet extends Component {

    render() {
      return (


        <div class = "form-container">
          <div class = "orange-form">
          <h2 class = "master-heading" id = "diet-heading"> select your dietary preferences</h2>

            <div class = "diet-container">
          <label className="dietary-options">
              <input type="checkbox" className="signup-text"  />
              vegetarian
          </label>
          <label className="dietary-options">
              <input type="checkbox" className="signup-text" />
              vegan
          </label>
          <label className="dietary-options">
              <input type="checkbox" className="signup-text"  />
              pescatarian
          </label>
          <label className="dietary-options">
              <input type="checkbox" className="signup-text" />
              peanut-free
          </label>
          <label className="dietary-options">
              <input type="checkbox" className="signup-text"  />
              gluten-free
          </label>
          <label className="dietary-options">
              <input type="checkbox" className="signup-text" />
              dairy-free
          </label>

                  <Col xs = {4}>
          <Link to="/signup">
              <button class = "back-button next-button"> back </button>
          </Link> 
          </Col>
          <Col xs = {4}>
          <Link to="/fridge">
              <button class = "next-button"> next> </button>
          </Link>
          </Col>
          </div>
        </div>
        </div>
      );
    }
  }
   
  export default Diet;