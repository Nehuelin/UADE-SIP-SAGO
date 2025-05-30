// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqenbtHahd-OZUF_XfmZLRwWXgQQAlNoc",
  authDomain: "sago-46988.firebaseapp.com",
  projectId: "sago-46988",
  storageBucket: "sago-46988.firebasestorage.app",
  messagingSenderId: "876912557800",
  appId: "1:876912557800:web:3dc324020f4d0c4035d35d",
  measurementId: "G-ZHMK464DER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

import { collection, addDoc } from "firebase/firestore"; 




