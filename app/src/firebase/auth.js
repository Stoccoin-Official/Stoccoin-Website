import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	// apiKey: import.meta.env.VITE_API_KEY,
	// authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	// projectId: import.meta.env.VITE_PROJECT_ID,
	// storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	// messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	// appId: import.meta.env.VITE_APP_ID,

	apiKey: "AIzaSyCaEnLB9i1AjNkoR3jj0BhoKJ4TZWDikzI",
	authDomain: "animating-buttons-5ae2b.firebaseapp.com",
	projectId: "animating-buttons-5ae2b",
	storageBucket: "animating-buttons-5ae2b.appspot.com",
	messagingSenderId: "328113147529",
	appId: "1:328113147529:web:517d447a8a83f581ee0058",
	measurementId: "G-WHKWF2ZSFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
