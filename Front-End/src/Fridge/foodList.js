// functional component - pulls prop from dashboard

import React from 'react'
import { Link } from 'react-router-dom'
import foodSummary from './foodSummary.js'
import { auth } from '../config/fbConfig.js'

const Bold = ({ children }) => <text style={{ fontWeight: 'bold' }}>{children}</text>

const FoodList = ({foods,authEmail}) => {
    console.log(foods)
    return(
        <div className = "food-list section">
{/*             { foods && foods.map(food => { // foods && is == if we have foods then map
                return (
                    <foodSummary food = {food} /> // Output food and exp date
                )
            })} */}

            { foods && foods.map(food => { // projects && is == if we have projects then map
                if (food.id === authEmail)
                {
                return (
                    <div>
                        <Bold> {food.food} </Bold> expires on {food.expiration_date}
                    </div>
                )
                }
            })}
        </div>
    )
}

export default FoodList