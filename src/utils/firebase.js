// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRkzWE6w-Vuarqy5JYaLH2jncxEWwzldk",
  authDomain: "netflixgpt-263b7.firebaseapp.com",
  projectId: "netflixgpt-263b7",
  storageBucket: "netflixgpt-263b7.appspot.com",
  messagingSenderId: "780482074247",
  appId: "1:780482074247:web:4279d6eb224f259f3b8a22",
  measurementId: "G-27T52QY5K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);