// Import the functions you need from the SDKs you need
// import the firebase initialize app that stores the firebase configuration for your project
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDMJVyAe2tnkDQJ0kyl190EcTXK-UHNfw",
  authDomain: "robru-6c9ea.firebaseapp.com",
  projectId: "robru-6c9ea",
  storageBucket: "robru-6c9ea.firebasestorage.app",
  messagingSenderId: "552849878929",
  appId: "1:552849878929:web:8317973274e69513a27430",
  measurementId: "G-S50VXGXZSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const storage = getStorage(app)
export const db = getFirestore(app)
export const auth = getAuth(app)


