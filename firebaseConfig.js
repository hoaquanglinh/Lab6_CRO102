// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU3Dc1whTLDUdYQmCCFCVAeVFy__3BHIc",
  authDomain: "cro102-c6d2f.firebaseapp.com",
  projectId: "cro102-c6d2f",
  storageBucket: "cro102-c6d2f.appspot.com",
  messagingSenderId: "742113944043",
  appId: "1:742113944043:web:c89086ec0c4af30e0b39ae",
  measurementId: "G-LSNXNYM6Q9"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB=getFirestore(FIREBASE_APP);
export const STORAGE=getStorage(FIREBASE_APP);
export const DATABASE=getDatabase(FIREBASE_APP);