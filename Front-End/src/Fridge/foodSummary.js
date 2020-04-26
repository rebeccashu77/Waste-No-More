//functional component to be nested inside ProjectList and repeated

import React from 'react'

const foodSummary = ({food}) => {
    console.log("REACHING THIS?")
    return (
            <div>
                  <p>{food.name} food!</p>
            </div>
    )

}

export default foodSummary