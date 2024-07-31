// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLFa3LnjmN9A8X6cwWzuU1Zvbkg-3CA_Y",
  authDomain: "dice-game-sky.firebaseapp.com",
  projectId: "dice-game-sky",
  storageBucket: "dice-game-sky.appspot.com",
  messagingSenderId: "219013102621",
  appId: "1:219013102621:web:d272e9a5c245d073201af4",
  measurementId: "G-FCJ5CR06D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);