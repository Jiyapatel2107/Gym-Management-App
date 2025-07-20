// services/authService.js
import { auth } from "../src/firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}