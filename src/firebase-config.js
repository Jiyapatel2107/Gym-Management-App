// src/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWDc0uvWYbi3kDGn-fMBHBuxh7Ey9bpUc",
  authDomain: "gym-management-97215.firebaseapp.com",
  projectId: "gym-management-97215",
  storageBucket: "gym-management-97215.firebasestorage.app",
  messagingSenderId: "953645837863",
  appId: "1:953645837863:web:c921eeb33de599163d2802"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Export Firestore and Auth
export { db, auth };
