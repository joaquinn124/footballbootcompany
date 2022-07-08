// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjSTSVHNnQ9jmUOJC-s3CXFdlAADg2IyM",
  authDomain: "footballbootcompany.firebaseapp.com",
  projectId: "footballbootcompany",
  storageBucket: "footballbootcompany.appspot.com",
  messagingSenderId: "99120043240",
  appId: "1:99120043240:web:84a66fdb39f098544e255d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}