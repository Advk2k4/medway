// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD6WmDWEEagksGXVlbr-ZMb8EMioCqeCdk",
  authDomain: "medway-cb114.firebaseapp.com",
  projectId: "medway-cb114",
  storageBucket: "medway-cb114.appspot.com",
  messagingSenderId: "34045703757",
  appId: "1:34045703757:web:be8cd975a2671edc594e04",
  measurementId: "G-KBYFJMHBHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
