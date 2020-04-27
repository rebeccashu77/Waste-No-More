import FoodList from './foodList';
import './fridge.css';
import '../style.css';
import '../Delete/delete';

import React, { Component } from "react";
import { Route, Link, Redirect } from 'react-router-dom'; 

import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

import 'firebase/firestore';

class Fridge extends Component {
render() {
        const {foods, auth} = this.props // destructuring
        if(!auth.uid) return <Redirect to = '/signin' /> 
        return(
                <div className="fridge-content"> 
                <div className="fridge-container">

                <h1> {auth.email}'s fridge</h1>
                <FoodList foods = {foods} authEmail = {auth.email} />
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
}

  // takes piece of state (in the store) and sends to the component as a prop
const mapStateToProps = (state) => { // takes in state of the store
    console.log(state)
    return { // in the store, the state of the root reducer has project prop that connects to projects property
        foods: state.firestore.ordered.foods, // pass to props of this new component
        auth: state.firebase.auth,
        //users: state.firestore.ordered.users
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        {
        collection: 'foods',
        orderBy: ["expiration_date", "asc"]
        //where: [props.auth.email,'==','foods.uid']
        } // when this component is active, want to listen to project collection
    ]), // now whenever database changes, this component will hear that and update state
)(Fridge)
// selects t he part of the data from the store that the connected component needs
// takes in the entire Redux store state

