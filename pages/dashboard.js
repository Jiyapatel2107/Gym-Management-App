// pages/dashboard.js
import { getAllMembers, deleteMemberById, getMemberById, updateMemberById } from "../services/memberService.js";
import { createMemberCard } from "../components/MemberCard.js";

import { exportToCSV } from "../utils/exportToCSV.js";

let members = [];

document.addEventListener("DOMContentLoaded", async () => {
  
  const container = document.getElementById("members-container");

  try {
    members = await getAllMembers();
    container.innerHTML = "";
    members.forEach(member => {
      const card = createMemberCard(member);
      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
  }

  document.getElementById("exportBtn").addEventListener("click", () => {
    const headers = ["name", "email", "phone"];
    const rows = members.map(m => ({
      name: m.name,
      email: m.email,
      phone: m.phone
    }));
    exportToCSV("members.csv", headers, rows);
  });
});

window.viewBill = function(memberId) {
  localStorage.setItem("memberId", memberId);
  window.location.href = "view-bills.html";  
};

window.deleteMember = async function(memberId) {
  if (confirm("Are you sure you want to delete this member?")) {
    await deleteMemberById(memberId);
    alert("✅ Member deleted.");
    location.reload();
  }
};

window.editMember = async function(memberId) {
  const member = await getMemberById(memberId);
  const newName = prompt("Enter new name:", member.name);
  const newPhone = prompt("Enter new phone:", member.phone);
  
  if (newName && newPhone && newpack) {
    await updateMemberById(memberId, { name: newName, phone: newPhone  });
    alert("✅ Member updated.");
    location.reload();
  }
};

