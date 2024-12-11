import { AUTH_SERVER_URL } from "../config/config";
export async function createCoverLetter(payload: any, token?: string) {
  try {
    const res = await fetch(`${AUTH_SERVER_URL}/cover`, {
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
      console.log(errorMessage);
      throw new Error(errorMessage);
    }
    return j;
  } catch (err: any) {
    throw err.message.replace(/^Error:\s*/, "");
  }
}
export async function getCoverLetter(token?: string) {
  try {
    const res = await fetch(`${AUTH_SERVER_URL}/cover`, {
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
export async function getCoverLetterDetail(coverId: string) {
  try {
    const res = await fetch(`${AUTH_SERVER_URL}/cover/${coverId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage
          .getItem("token")!
          .replace(/"/g, "")}`,
        "Content-Type": "application/x-www-form-urlencoded",
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

export async function createPersonalInformation(payload: any, token?: string) {
  try {
    const res = await fetch(`${AUTH_SERVER_URL}/account/set-professionalInfo`, {
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
      console.log(errorMessage);
      throw new Error(errorMessage);
    }
    return j;
  } catch (err: any) {
    throw err.message.replace(/^Error:\s*/, "");
  }
}

export async function getPersonalInformation() {
  try {
    const res = await fetch(`${AUTH_SERVER_URL}/account/get-professionalInfo`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage
          .getItem("token")!
          .replace(/"/g, "")}`,
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

export async function createPaymentConfirmation(payload: any, token?: string) {
  try {
    const res = await fetch(`${AUTH_SERVER_URL}/user/upgrade_to_premium`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage
          .getItem("token")!
          .replace(/"/g, "")}`,
      },
      body: JSON.stringify(payload),
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
