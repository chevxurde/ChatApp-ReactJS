// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjLpjQCzTEIEZJvCKvT6eUIZheIkjPdVM",
  authDomain: "react-course-2781e.firebaseapp.com",
  projectId: "react-course-2781e",
  storageBucket: "react-course-2781e.appspot.com",
  messagingSenderId: "71369640843",
  appId: "1:71369640843:web:457f30c7f8f5654858fd8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);