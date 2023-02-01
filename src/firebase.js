// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDvXRakoJCQKiTIQb9h2lRh6IrQ5HEFl8M",
  authDomain: "uchat-a5d72.firebaseapp.com",
  projectId: "uchat-a5d72",
  storageBucket: "uchat-a5d72.appspot.com",
  messagingSenderId: "498367864195",
  appId: "1:498367864195:web:84f79913162c625608eab6",
  measurementId: "G-72H21QH6MP"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);