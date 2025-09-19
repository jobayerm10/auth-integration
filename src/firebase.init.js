// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgxoe9bDd_1F0p1bUhS02R_rl6Ms9v7Q0",
  authDomain: "auth-integration-7e88a.firebaseapp.com",
  projectId: "auth-integration-7e88a",
  storageBucket: "auth-integration-7e88a.firebasestorage.app",
  messagingSenderId: "1074927497476",
  appId: "1:1074927497476:web:0bf5a7f1672ccabeef6051",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// / Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
