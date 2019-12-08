import firebase from 'firebase';

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyD0Jm8j0_CIZnD5HaTYTtz0qHT4C0FlFX4",
    authDomain: "diaper-c524b.firebaseapp.com",
    databaseURL: "https://diaper-c524b.firebaseio.com",
    projectId: "diaper-c524b",
    storageBucket: "diaper-c524b.appspot.com",
    messagingSenderId: "414107806619",
    appId: "1:414107806619:web:740b2f1e090f4cd1008f3e"
  };
 
  firebase.initializeApp(firebaseConfig);

    export default firebase;