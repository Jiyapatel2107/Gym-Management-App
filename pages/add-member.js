import { addMember } from "../services/memberService.js";

document.getElementById("add-member-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const defaultPassword = "member123"; // Same as Firebase Auth password

  try {
    await addMember({ name, email, phone, password: defaultPassword });
    alert(`✅ Member added successfully!\nDefault login password: ${defaultPassword}`);
    document.getElementById("add-member-form").reset();
  } catch (error) {
    alert("❌ Error: " + error.message);
  }
});
