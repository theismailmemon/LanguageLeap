// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOZOFtnwQzv2Ceql_AMFq0dD57H0CZKkM",
  authDomain: "emailpasswordlanguage.firebaseapp.com",
  projectId: "emailpasswordlanguage",
  storageBucket: "emailpasswordlanguage.appspot.com",
  messagingSenderId: "90325406549",
  appId: "1:90325406549:web:8819ed3cc53e5f6c0495dc",
  measurementId: "G-DMR7X4R1S8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getAuth(app);



