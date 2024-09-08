// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN1Lch727hoKyxN1ox5DWudorBBVXmqIE",
  authDomain: "netflix-gpt-970bd.firebaseapp.com",
  projectId: "netflix-gpt-970bd",
  storageBucket: "netflix-gpt-970bd.appspot.com",
  messagingSenderId: "120736989025",
  appId: "1:120736989025:web:d98084ebc300c844f24f20",
  measurementId: "G-WPRSWSBVWC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
