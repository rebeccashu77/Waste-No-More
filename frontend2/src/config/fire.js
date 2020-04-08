import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBekDBkZ4FPMke-kxhXV4kqGkqv6JtwakM",
    authDomain: "virtualfridge-65ccf.firebaseapp.com",
    databaseURL: "https://virtualfridge-65ccf.firebaseio.com",
    projectId: "virtualfridge-65ccf",
    storageBucket: "virtualfridge-65ccf.appspot.com",
    messagingSenderId: "303557653431",
    appId: "1:303557653431:web:2ecd394de606bd672f2e32",
    measurementId: "G-NJXLHMP5FE"
  };
const fire = firebase.initializeApp(config);

// const myFirebase = firebase.database().ref();

// const fridges = myFirebase.child("fridges");

// fridges.push({
//   "user": "jonathan.yu@duke.edu",
//   "foods": ["Spinach", "Mushrooms", "Tofu", "Strawberries"]
// })

export default fire;