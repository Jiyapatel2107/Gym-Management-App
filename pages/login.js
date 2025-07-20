// login.js
import { auth, db } from "../src/firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";
import {
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  try {
    // Step 1: Login with Firebase Auth
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const user = cred.user;
    localStorage.setItem("uid", user.uid);
    localStorage.setItem("email", email);

    let role = null;

    // Step 2: Check in 'users' collection
    const usersQuery = query(collection(db, "users"), where("email", "==", email));
    const usersSnap = await getDocs(usersQuery);

    if (!usersSnap.empty) {
      const userDoc = usersSnap.docs[0];
      role = userDoc.data().role;
    }

    // Step 3: If not found in 'users', check in 'members'
    if (!role) {
      const membersQuery = query(collection(db, "members"), where("email", "==", email));
      const membersSnap = await getDocs(membersQuery);

      if (!membersSnap.empty) {
        const memberDoc = membersSnap.docs[0];
        role = memberDoc.data().role || "member";
        localStorage.setItem("memberId", memberDoc.id); // Store member ID
      }
    }

    // Step 4: Handle unknown users
    if (!role) {
      alert("❌ No user or member record found. Contact Admin.");
      return;
    }

    localStorage.setItem("role", role);

    // Step 5: Redirect based on role
    if (role === "admin") {
      window.location.href = "dashboard.html";
    } else if (role === "member") {
      window.location.href = "member-home.html";
    } else if (role === "user") {
      window.location.href = "user-home.html";
    } else {
      alert("❌ Unknown role. Contact Admin.");
    }

  } catch (err) {
    alert("❌ Login failed: " + err.message);
  }
});
