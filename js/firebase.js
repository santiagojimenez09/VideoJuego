// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAhsXoIlgOYfJx2rKsNLP0mTs-Oswwf30",
  authDomain: "videojuego-70b52.firebaseapp.com",
  projectId: "videojuego-70b52",
  storageBucket: "videojuego-70b52.appspot.com",
  messagingSenderId: "203598118394",
  appId: "1:203598118394:web:5b72ad445a4daaeb097843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);