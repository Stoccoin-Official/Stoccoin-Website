import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "API-KEY",
  authDomain: "stoccoin-website.firebaseapp.com",
  projectId: "stoccoin-website",
  storageBucket: "stoccoin-website.appspot.com",
  messagingSenderId: "1033424071835",
  appId: "1:1033424071835:web:dde4cc100d714406ce6a3e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
