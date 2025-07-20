// utils/logger.js
export function logAction(action, payload = {}) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ACTION: ${action}`, payload);
}