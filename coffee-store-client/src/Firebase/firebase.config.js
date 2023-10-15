// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH2xyaPDxb6SLfdI4xitaVhaWJJyIeiEc",
  authDomain: "simple-firebase-96cc9.firebaseapp.com",
  projectId: "simple-firebase-96cc9",
  storageBucket: "simple-firebase-96cc9.appspot.com",
  messagingSenderId: "768295328200",
  appId: "1:768295328200:web:a14fee50daa2df51c648fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);