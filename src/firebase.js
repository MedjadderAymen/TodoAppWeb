import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
    apiKey: "AIzaSyAKyqWawjKyoQ_JXr8rjNU2Lo_8U2WEiP8",
    authDomain: "vuetify-todo-3127d.firebaseapp.com",
    projectId: "vuetify-todo-3127d",
    storageBucket: "vuetify-todo-3127d.appspot.com",
    messagingSenderId: "367137871250",
    appId: "1:367137871250:web:264afc03e128388a3b9d4b",
    measurementId: "G-P30BY79LB1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
});

export default db;