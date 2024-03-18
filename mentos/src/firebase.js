// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import getFirestore

const firebaseConfig = {
  apiKey: "AIzaSyD8wNKoeYaKblEQt9lxIOg68owwqmgcPtA",
  authDomain: "mentos-3118c.firebaseapp.com",
  projectId: "mentos-3118c",
  storageBucket: "mentos-3118c.appspot.com",
  messagingSenderId: "195107626676",
  appId: "1:195107626676:web:fa88e3f29cd20faa0401e1",
  measurementId: "G-5DX3MJG9YZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app); // Use getFirestore to get the Firestore instance

export default database;
