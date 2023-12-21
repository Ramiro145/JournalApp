// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaFZdjHGbqYhUNbFAa_nBC3pGihtls1-4",
  authDomain: "react-cursos-3b347.firebaseapp.com",
  projectId: "react-cursos-3b347",
  storageBucket: "react-cursos-3b347.appspot.com",
  messagingSenderId: "595119024305",
  appId: "1:595119024305:web:723207f5e8c37beff59a90"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);