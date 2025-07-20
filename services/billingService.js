// services/billingService.js
import { db } from "../src/firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

export async function createBill({ memberId, amount, dueDate }) {
  return await addDoc(collection(db, "bills"), {
    memberId,
    amount,
    dueDate,
    createdAt: new Date().toISOString(),
    status: "unpaid"
  });
}