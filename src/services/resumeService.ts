import { AUTH_SERVER_URL } from "../config/config";
export async function uploadResume(payload: any, token?: string) {
  try {
    const res = await fetch(`${AUTH_SERVER_URL}/resume`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          token ? token : localStorage.getItem("token")!.replace(/"/g, "")
        }`,
      },
      body: payload,
    });
    const j = await res.json();
    if (!j.success) {
      const errorMessage = j.message || "Unknown error";
      console.log(errorMessage);
      throw new Error(errorMessage);
    }
    return j;
  } catch (err: any) {
    throw err.message.replace(/^Error:\s*/, "");
  }
}
export async function getResumes(token?: string) {
  try {
    const res = await fetch(`${AUTH_SERVER_URL}/resume`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${
          token ? token : localStorage.getItem("token")!.replace(/"/g, "")
        }`,
      },
    });
    const j = await res.json();
    console.log(j, "j");
    if (j.success && !j.success) {
      const errorMessage = j.message || "Unknown error";
      console.log(errorMessage);
      throw new Error(errorMessage);
    }
    return j;
  } catch (err: any) {
    throw err.message.replace(/^Error:\s*/, "");
  }
}
