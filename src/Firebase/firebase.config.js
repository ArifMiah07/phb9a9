// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUf3lM-CCcHAkp2od6Xl9of-H23dPLt_0",
  authDomain: "port-land.firebaseapp.com",
  projectId: "port-land",
  storageBucket: "port-land.appspot.com",
  messagingSenderId: "12247602322",
  appId: "1:12247602322:web:38d44f09d761827f67424b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;