// actions related to deleting projects adding projects

export const add = (food) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database

        const firestore = getFirestore();
        //const firebase = getFirebase();
        const profile = getState().firebase.profile; // grabs profile from the state
        const authorId = getState().firebase.auth.uid;
        //const UID = getState().firebase.auth.UID;
        
        firestore.collection('foods').add({ //add to projects collection
            ...food,
            authorId: authorId,
            userId: profile.UID,
            purchase_date: new Date()
            //: fridge.food
        }).then( () =>{
            dispatch({ type: 'ADD_FOOD', food})
         }).catch((err) => {
            dispatch({ type : 'ADD_FOOD_ERROR', err})
        })

         // only fires when this document has been added to collection 

     }
};


export const deleteFood = (id) => {
    return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('foods').doc(id).delete();
    }
  }
//npm install react-redux-firebase redux-firestore