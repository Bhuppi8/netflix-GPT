// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhh5yUaDWHaP_xB0dFMo9T9fa8ZlbhujA",
  authDomain: "netflix-gpt-516eb.firebaseapp.com",
  projectId: "netflix-gpt-516eb",
  storageBucket: "netflix-gpt-516eb.firebasestorage.app",
  messagingSenderId: "968647802712",
  appId: "1:968647802712:web:6b8c2e246aee0b275b2f2d",
  measurementId: "G-XNP20D2E1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);