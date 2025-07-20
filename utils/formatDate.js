// utils/formatDate.js
export function formatDate(input) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };

  try {
    // If Firestore Timestamp object (has toDate method)
    if (input && typeof input.toDate === "function") {
      return input.toDate().toLocaleDateString(undefined, options);
    }

    // If input is ISO string or Date
    const date = new Date(input);
    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString(undefined, options);
    }

    return "Invalid Date";
  } catch {
    return "Invalid Date";
  }
}
