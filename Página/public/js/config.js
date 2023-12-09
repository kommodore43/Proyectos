import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBpbe1b8T8Eyrg_GtAinOQnmdoU3YpE9TY",
    authDomain: "confesiones-676b7.firebaseapp.com",
    projectId: "confesiones-676b7",
    storageBucket: "confesiones-676b7.appspot.com",
    messagingSenderId: "74939281964",
    appId: "1:74939281964:web:87eb3bbfd6fb5dbcded789",
    measurementId: "G-VXHV7Z9W4E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
