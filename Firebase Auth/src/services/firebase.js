// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVpG0H8CUSEPdwLqMuDFuHCNuKza31dI0",
  authDomain: "fir-auth-a0054.firebaseapp.com",
  projectId: "fir-auth-a0054",
  storageBucket: "fir-auth-a0054.appspot.com",
  messagingSenderId: "303288033690",
  appId: "1:303288033690:web:b0b20326f737a5120a5a23",
  measurementId: "G-X98BSKPSZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();