// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCGdF0nTL57cl18XKRadHlugcLI6YbB4A",
  authDomain: "prueba-tutorialvuetify.firebaseapp.com",
  databaseURL: "https://prueba-tutorialvuetify-default-rtdb.firebaseio.com",
  projectId: "prueba-tutorialvuetify",
  storageBucket: "prueba-tutorialvuetify.appspot.com",
  messagingSenderId: "450653554038",
  appId: "1:450653554038:web:45880542e75526f6526657",
  measurementId: "G-KKQFE5FQL5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;