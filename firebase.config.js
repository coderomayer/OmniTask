// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUnSLcGAdConaYVSOu83avQNT-qkzyRoo",
  authDomain: "omnitask-1178a.firebaseapp.com",
  projectId: "omnitask-1178a",
  storageBucket: "omnitask-1178a.appspot.com",
  messagingSenderId: "584136092205",
  appId: "1:584136092205:web:5cff5d51a752bf1120e6a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;