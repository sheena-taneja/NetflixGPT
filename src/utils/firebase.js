// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGfYEKxA8uYQylFKW5-Qj9MafjeyuDJyg",
  authDomain: "my-react-project-305c6.firebaseapp.com",
  projectId: "my-react-project-305c6",
  storageBucket: "my-react-project-305c6.appspot.com",
  messagingSenderId: "368059178026",
  appId: "1:368059178026:web:55f31adb7d13e901d77753",
  measurementId: "G-93CBBBMTDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();