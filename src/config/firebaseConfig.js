// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA5yNmspPU_wAotKlOm7bu0H9rYAspogFs",
    authDomain: "capstone-cf515.firebaseapp.com",
    projectId: "capstone-cf515",
    storageBucket: "capstone-cf515.appspot.com",
    messagingSenderId: "461707867119",
    appId: "1:461707867119:web:db3ca38927c3f90d5bfc1a",
    measurementId: "G-4M9E2SYHKC"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;