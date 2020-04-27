/* import React, { Component } from "react";
import { Route, Link, Redirect } from 'react-router-dom'; 
import  { deleteFood } from '../actions/fridgeAction'

import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import './delete.css';
import '../style.css';
//import FoodList from '../Fridge/foodList';



const Delete = (props) => {



    console.log(props);
    const { food, auth } = props;

      return (
          <div className="Delete">
              <div className="delete-content"> 
                    <h>delete </h>
                    <p> food.food </p>

                <div className="delete-buttons">
                    <Link to="/fridge">
                        <button class = "back-button">back</button>
                    </Link> 
                    <Link to="/delete">
                        <button onClick={this.handleDelete} class = "next-button">yes</button>
                    </Link> 
                </div>
              </div>
          </div>
      );
    }

   
 const mapStateToProps = (state, ownProps) => {
        console.log(state)
        const id = ownProps.match.params.id;
        const foods = state.firestore.data.foods;
        const food = food ? foods[id] : null
        return {
            food: food,
            auth: state.firebase.auth,
            id: id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteFood: (id) => dispatch(deleteFood(id))
    } // creates dispatch that takes project from this.state and sends it to the action dispatch
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'foods' }
    ])
)(Delete);

// selects the part of the data from the store that the connected component needs
// takes in the entire Redux store state
 */