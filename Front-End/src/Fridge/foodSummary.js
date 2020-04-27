
import {deleteFood} from '../actions/fridgeAction' 
import { connect } from 'react-redux';
import React, {Component} from 'react'


class FoodSummary extends Component {
    state = {
      food: this.props.food
    } 
    render() {
    
        const { food, deleteFood}  = this.props

         return(
             <button onClick={ () => deleteFood(food.id)} >
              Delete
             </button>
         )
        }
    }
    
    const mapStateToProps = (state, ownProps) => {
        console.log(state)
        const id = ownProps.match.params.id;
        const foods = state.firestore.data.foods;
        const food = foods ? foods[id] : null
        return {
            food: food,
            auth: state.firebase.auth
        }
    }
    
const mapDispatchToProps = (dispatch) => {
    return {
        deleteFood: (id) => { dispatch(deleteFood(id))},
        }
}
    export default connect(null, mapDispatchToProps)(FoodSummary)