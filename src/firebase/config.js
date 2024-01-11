// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //  Con esta linea traigo todas las bases que tenga en Firebase

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5skdVzb3uUt_m26L23Hyrf4fo-oGbiUg",
  authDomain: "eshopreact-6a467.firebaseapp.com",
  projectId: "eshopreact-6a467",
  storageBucket: "eshopreact-6a467.appspot.com",
  messagingSenderId: "376426755733",
  appId: "1:376426755733:web:d6ce570b7571a9a12f0d9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
