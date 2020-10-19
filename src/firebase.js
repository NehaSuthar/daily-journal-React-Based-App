import firebase from 'firebase/app';
import 'firebase/database';  

let firebaseConfig = {
    apiKey: "AIzaSyDU0kFCtN-ggzhzrn8rltvhMD3aAS-DtP4",
    authDomain: "react-firebase-project5.firebaseapp.com",
    databaseURL: "https://react-firebase-project5.firebaseio.com",
    projectId: "react-firebase-project5",
    storageBucket: "react-firebase-project5.appspot.com",
    messagingSenderId: "755864469537",
    appId: "1:755864469537:web:e40fed3c5570eb9ffa6360"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;