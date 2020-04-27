// functional component - pulls prop from dashboard

import React from 'react'
import { Link } from 'react-router-dom'
import FoodSummary from './foodSummary.js'
import { auth } from '../config/fbConfig.js'
import moment from 'moment'; // npm install moment

const Bold = ({ children }) => <text style={{ fontWeight: 'bold' }}>{children}</text>

const FoodList = ({foods,authEmail}) => {

    //<Link to={'/delete/' + food.id} key = {foods.id} style={{ color: 'black' }}><button> Delete</button> </Link>

    console.log(foods)
    return(
        <div className = "food-list section">
{/*             { foods && foods.map(food => { // foods && is == if we have foods then map
                return (
                    <foodSummary food = {food} /> // Output food and exp date
                )
            })} */}

            { foods && foods.map(food => { // projects && is == if we have projects then map
                if (food.userId === authEmail)
                {
                return (
                    <div>
                        <Bold> {food.food} </Bold> expires on {moment(food.expiration_date.toDate()).format('L')}
                        <FoodSummary food = {food}/>
                    </div>
                )
                }
            })}
        </div>
    )
}


export default FoodList

