import { AUTH_SERVER_URL } from "../config/config";
export async function contactUs(payload: any) {
  try {
    const res = await fetch(`${AUTH_SERVER_URL}/account/contact-us`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: payload }),
    });
    const j = await res.json();
    if (!j.success) {
      const errorMessage = j.message || "Unknown error";
      throw new Error(errorMessage);
    }
    return j;
  } catch (err: any) {
    throw err.message.replace(/^Error:\s*/, "");
  }
}
export async function feedbackUser(payload: any) {
  try {
    const res = await fetch(`${AUTH_SERVER_URL}/account/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage
          .getItem("token")!
          .replace(/"/g, "")}`,
      },
      body: JSON.stringify({ data: payload }),
    });
    const j = await res.json();
    if (!j.success) {
      const errorMessage = j.message || "Unknown error";
      throw new Error(errorMessage);
    }
    return j;
  } catch (err: any) {
    throw err.message.replace(/^Error:\s*/, "");
  }
}
