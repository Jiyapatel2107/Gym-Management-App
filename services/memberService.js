// services/memberService.js
import { auth, db } from "../src/firebase-config.js";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

export async function getAllMembers() {
  const snapshot = await getDocs(collection(db, "members"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// ✅ Add member with reset email flow
export async function addMember({ name, email, phone, password }) {
  try {
    // 1. Create user in Firebase Authentication with given password
    await createUserWithEmailAndPassword(auth, email, password);

    // 2. Add member details to Firestore
    return await addDoc(collection(db, "members"), {
      name,
      email,
      phone,
      role: "member",
      createdAt: new Date().toISOString(),
    });

  } catch (error) {
    throw new Error("Failed to add member: " + error.message);
  }
}

export async function deleteMemberById(memberId) {
  return await deleteDoc(doc(db, "members", memberId));
}

export async function updateMemberById(memberId, updatedData) {
  return await updateDoc(doc(db, "members", memberId), updatedData);
}

export async function getMemberById(memberId) {
  const docRef = doc(db, "members", memberId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
}
