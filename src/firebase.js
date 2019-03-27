import firebase from 'firebase/app';
import 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyCXSLEcXxZizk8wJW4Kuveh80ZlVg9litQ",
    authDomain: "m-city-f3ef5.firebaseapp.com",
    databaseURL: "https://m-city-f3ef5.firebaseio.com",
    projectId: "m-city-f3ef5",
    storageBucket: "m-city-f3ef5.appspot.com",
    messagingSenderId: "912558179665"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');

export {
    firebase,
    firebaseMatches
}
