// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgAxOPwHHUC8w9DoUMf77gdcBQCHqVQJw",
  authDomain: "fir-database-7f71a.firebaseapp.com",
  projectId: "fir-database-7f71a",
  storageBucket: "fir-database-7f71a.appspot.com",
  messagingSenderId: "514010111156",
  appId: "1:514010111156:web:f27cb7f427f77a02d50be1",
  measurementId: "G-Y71P6235ZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();