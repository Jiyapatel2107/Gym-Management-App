// pages/create-bill.js
import { createBill } from "../services/billingService.js";

document.getElementById("create-bill-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const memberId = document.getElementById("memberId").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const dueDate = document.getElementById("dueDate").value;

  try {
    await createBill({ memberId, amount, dueDate });
    alert("Bill generated successfully!");
  } catch (error) {
    alert("Error: " + error.message);
  }
});