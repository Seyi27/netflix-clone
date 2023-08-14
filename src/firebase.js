import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcDf_gLcLQX8Uv8u3qr-CiH7PsWDxuo7g",
  authDomain: "netflix-clone-55163.firebaseapp.com",
  projectId: "netflix-clone-55163",
  storageBucket: "netflix-clone-55163.appspot.com",
  messagingSenderId: "844762434713",
  appId: "1:844762434713:web:09c4418e775239173dbc08"
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db= firebaseapp.firestore();
const auth = firebase.auth();

export {auth};
export default db;