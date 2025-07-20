// signup.js
import { auth, db } from "../src/firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { doc, setDoc, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

document.getElementById("signupBtn").addEventListener("click", async () => {
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;
  const name = document.getElementById("signupName").value.trim();
  const phone = document.getElementById("signupPhone").value.trim();
  const role = document.getElementById("signupRole").value.trim();
  const btn = document.getElementById("signupBtn");

  if (!email || !password || !name || !phone || !role) {
    alert("Please fill all fields.");
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  try {
    btn.disabled = true;
    btn.textContent = "Registering...";

    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const createdAt = new Date().toISOString();

    if (role === "member") {
      await addDoc(collection(db, "members"), {
        name,
        phone,
        email,
        role,
        createdAt
      });
    } else {
      await setDoc(doc(db, "users", email), {
        name,
        phone,
        email,
        role,
        createdAt
      });
    }

    alert("✅ Registered successfully! Please log in.");
    window.location.href = "index.html";

  } catch (error) {
    btn.disabled = false;
    btn.textContent = "Sign Up";
    alert("❌ Error: " + error.message);
  }
});