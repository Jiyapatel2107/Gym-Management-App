import { db } from "../src/firebase-config.js";
import {
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { formatDate } from "../utils/formatDate.js";

// Helper: Get URL param
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadBills();
});

async function loadBills() {
  const memberId = getQueryParam("memberId");
  const container = document.getElementById("bills-container");

  if (!memberId) {
    container.innerHTML = "<p style='color:red;'>Member ID missing in URL.</p>";
    return;
  }

  try {
    const billsRef = collection(db, "bills");
    const q = query(billsRef, where("memberId", "==", memberId));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      container.innerHTML = "<p>No bills found for this member.</p>";
      return;
    }

    container.innerHTML = ""; // Clear loading text
    snapshot.forEach(doc => {
      const bill = doc.data();
      const card = document.createElement("div");
      card.className = "bill-card";
      card.innerHTML = `
        <p><strong>Amount:</strong> ₹${bill.amount}</p>
        <p><strong>Due Date:</strong> ${bill.dueDate}</p>
        <p><strong>Status:</strong> ${bill.status}</p>
        <p><strong>Generated:</strong> ${formatDate(bill.createdAt)}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}
