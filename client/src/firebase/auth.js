import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2wo4EYdNsY2_bAx_xwR8kHmw40CEvKko",
  authDomain: "stoccoin-dfadc.firebaseapp.com",
  projectId: "stoccoin-dfadc",
  storageBucket: "stoccoin-dfadc.appspot.com",
  messagingSenderId: "716615313883",
  appId: "1:716615313883:web:b31b9e91076e7f7ca0dffe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
