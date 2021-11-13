import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvqZWxFKFuttb10taQ7IFrLL0JIjGGtyE",
  authDomain: "trabajo-practico-edc6c.firebaseapp.com",
  projectId: "trabajo-practico-edc6c",
  storageBucket: "trabajo-practico-edc6c.appspot.com",
  messagingSenderId: "469152850525",
  appId: "1:469152850525:web:e59d907f1333e1a15463b4",
  measurementId: "G-P3WHG02QKV"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.db = firebase.firestore()
firebase.auth = firebase.auth()
export default firebase