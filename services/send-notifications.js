import { db } from "../src/firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

export async function sendNotification(message) {
  try {
    console.log("Sending message:", message); // For debugging
    await addDoc(collection(db, "notifications"), {
      message,
      timestamp: new Date().toISOString()
    });
    alert("✅ Notification sent to all members.");
  } catch (error) {
    console.error("❌ Error sending notification:", error);
    alert("❌ Failed: " + error.message);
  }
}
