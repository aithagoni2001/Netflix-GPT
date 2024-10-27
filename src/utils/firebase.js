
import { getAuth} from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAnAh0qflBubwkH5CL2-QPU-SUw1Uespo",
  authDomain: "netflixgpt-d217f.firebaseapp.com",
  projectId: "netflixgpt-d217f",
  storageBucket: "netflixgpt-d217f.appspot.com",
  messagingSenderId: "289034679371",
  appId: "1:289034679371:web:ba0f625796e457920ec9ce",
  measurementId: "G-VT522EBSJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();