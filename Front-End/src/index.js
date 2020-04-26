import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers/rootReducer'
import {Provider, useSelector} from 'react-redux' //binds redux with react app
import thunk from 'redux-thunk'
import {reduxFirestore, getFirestore, createFirestoreInstance} from 'redux-firestore'
import {ReactReduxFirebaseProvider, getFirebase, isLoaded} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA



// thunk is middleware that allows us to add store enhancers
const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig), // enhancing store and passing in our config for firebase
    )
); // creates store function
// redux is a central data store - state management is easier with redux
// the reducer is the function that can edit the state of the datastore
// actions communicate with the reducer to alter the state of the store

// create an action as a javascript function then use store.dispatch(action)
// this dispatches the action to the reducer which holds the action in an object
// the state can then be updated using that object
// reducer edits that state depending on action.type
// instead of directly editing state (destructive) we add new elements to update
// then store.subscrube to alter other things with .getState()

// applyMiddleWare takes in a list of middleware and enhances the store
// thunk provides functions that halt dispatch, preventing action on reducer until data recieved externally
// allows for communication with database within action creator

const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
}


const rrfProps = {
  firebase,
  config: fbConfig,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance,
  //userProfile: 'users', // where profiles are stored in database
  //presence: 'presence', // where list of online users is stored in database
  //sessions: 'sessions'
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children
}


// provider passes store along to containers (components)
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <AuthIsLoaded>
      <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
