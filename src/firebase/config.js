// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import firebase from "firebase/compat/app"
//import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0OpvF0DEgOkx3KJYCWY_e7piPjlK-x-Q",
  authDomain: "firegram-68514.firebaseapp.com",
  projectId: "firegram-68514",
  storageBucket: "firegram-68514.appspot.com",
  messagingSenderId: "148540305380",
  appId: "1:148540305380:web:73791f4f319131a60121f1"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp



export { projectStorage, projectFirestore, timestamp};