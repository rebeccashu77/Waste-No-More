import authReducer from './authReducer'
import fridgeReducer from './fridgeReducer'
import {combineReducers} from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

// root reducer passes into the store
const rootReducer = combineReducers({ //object that has reducers we want to combine
    auth: authReducer, // two properties of state object that correspond to the different reducers
    food: fridgeReducer,
    firestore: firestoreReducer, // contains firestore data - retrieves data but dependent on the active component
    firebase: firebaseReducer
}); // need to tell the reducer what data to sync

export default rootReducer