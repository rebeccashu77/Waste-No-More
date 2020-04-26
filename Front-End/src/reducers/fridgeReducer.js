

const initState = { // initial state w/ default values
    foods: [
          {food: 'flour', expiration_date: 'Jan 23' },
          {food: 'lettuce', expiration_date: 'Jan 23' }
    ]
}


// reducer in a function that takes in two parameters - state and action
const fridgeReducer = (state = initState, action) => {
    
    switch (action.type) {
        case 'ADD_FOOD': // recieves dispatch from  CreateProject  action
            console.log('food added', action.food)
            return state;
        case 'ADD_FOOD_ERROR':
            console.log('add food error', action.err)
            return state;
        default:
            return state;
    }
}

export default fridgeReducer