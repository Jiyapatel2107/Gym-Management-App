// components/MemberCard.js
export function createMemberCard(member) {
  const card = document.createElement("div");
  card.className = "member-card";

  card.innerHTML = `
    <h3>${member.name}</h3>
    <p>Email: ${member.email}</p>
    <p>Phone: ${member.phone}</p>
    <p>Package:${member.package || "Not Assigned"}</p>
    <button onclick="viewBills('${member.id}')">View Bills</button>
    <button onclick="editMember('${member.id}')">✏️ Edit</button>
    <button onclick="deleteMember('${member.id}')">🗑️ Delete</button>
  `;

  return card;
}

// global for access
window.viewBills = function(memberId) {
  window.location.href = `view-bills.html?memberId=${memberId}`;
};
