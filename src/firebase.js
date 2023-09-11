import firebase from "firebase/app";
import 'firebase/auth'

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDZ8mrwJK4pdd9HQ3MCZxjizFsU6wYCfSA",
    authDomain: "unichat-6dd73.firebaseapp.com",
    projectId: "unichat-6dd73",
    storageBucket: "unichat-6dd73.appspot.com",
    messagingSenderId: "713402622359",
    appId: "1:713402622359:web:01e441dbcef472f2c864d2"
  }).auth();
