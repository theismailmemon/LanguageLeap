// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6fkhWjnFvdL6sxohse6NmcGjf4RoXj_s",
  authDomain: "emailpasswordduilngo.firebaseapp.com",
  projectId: "emailpasswordduilngo",
  storageBucket: "emailpasswordduilngo.appspot.com",
  messagingSenderId: "465070409354",
  appId: "1:465070409354:web:55af02e043d69987dfcf73",
  measurementId: "G-8QZTJXNK1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getAuth(app);
