// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOqHwwyciaHHDQwWdA9J_XGtDqnp82bDs",
  authDomain: "fir-storage-e8273.firebaseapp.com",
  projectId: "fir-storage-e8273",
  storageBucket: "fir-storage-e8273.appspot.com",
  messagingSenderId: "660721597551",
  appId: "1:660721597551:web:2520781b45776d6cc1e19a",
  measurementId: "G-ERZ5CQHRHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);