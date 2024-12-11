import { AUTH_SERVER_URL } from "../config/config"
import { ILogin } from "../Interfaces/user"
export async function currentUser(token?: string) {
    try {
        const res = await fetch(
            `${AUTH_SERVER_URL}/account`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${
                        token
                            ? token
                            : localStorage
                                  .getItem("token")!
                                  .replace(/"/g, "")
                    }`,
                },
            }
        )
        const j = await res.json()
        console.log(j, "j")
        if (j.success && !j.success) {
            const errorMessage =
                j.message || "Unknown error"
            console.log(errorMessage)
            throw new Error(errorMessage)
        }
        return j
    } catch (err: any) {
        throw err.message.replace(/^Error:\s*/, "")
    }
}
export async function loginUser(payload: ILogin) {
    try {
        const res = await fetch(
            `${AUTH_SERVER_URL}/account/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: payload }),
            }
        )
        const j = await res.json()
        if (!j.success) {
            const errorMessage =
                j.message || "Unknown error"
            console.log(errorMessage)
            throw new Error(errorMessage)
        }
        return j
    } catch (err: any) {
        throw err.message.replace(/^Error:\s*/, "")
    }
}
export async function loginGoogleUser(
    payload: createGoogleUserType
) {
    try {
        const res = await fetch(
            `${AUTH_SERVER_URL}/account/signin/google`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: payload }),
            }
        )
        const j = await res.json()
        if (!j.success) {
            const errorMessage =
                j.message || "Unknown error"
            console.log(errorMessage)
            throw new Error(errorMessage)
        }
        return j
    } catch (err: any) {
        throw err.message.replace(/^Error:\s*/, "")
    }
}
export async function createUser(payload: createUserType) {
    try {
        const res = await fetch(
            `${AUTH_SERVER_URL}/account/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: payload }),
            }
        )
        const j = await res.json()
        if (!j.success) {
            const errorMessage =
                j.message || "Unknown error"
            console.log(errorMessage)
            throw new Error(errorMessage)
        }
        return j
    } catch (err: any) {
        throw err.message.replace(/^Error:\s*/, "")
    }
}
export async function forgotPassword(email: string) {
    try {
        const res = await fetch(
            `${AUTH_SERVER_URL}/account/forget_password`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email }),
            }
        )
        const j = await res.json()
        if (!j.success) {
            const errorMessage =
                j.message || "Unknown error"
            console.log(errorMessage)
            throw new Error(errorMessage)
        }
        return j
    } catch (err: any) {
        throw err.message.replace(/^Error:\s*/, "")
    }
}
export async function verifyOTP(payload: forgotUserType) {
    try {
        const res = await fetch(
            `${AUTH_SERVER_URL}/account/verify_otp`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }
        )
        const j = await res.json()

        if (!j.success) {
            const errorMessage =
                j.message || "Unknown error"
            console.log(errorMessage)
            throw new Error(errorMessage)
        }
        return j
    } catch (err: any) {
        throw err.message.replace(/^Error:\s*/, "")
    }
}

export async function resetPassword(
    payload: forgotUserType
) {
    try {
        const res = await fetch(
            `${AUTH_SERVER_URL}/account/reset_password`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }
        )
        const j = await res.json()
        if (!j.success) {
            const errorMessage =
                j.message || "Unknown error"
            throw new Error(errorMessage)
        }
        return j
    } catch (err: any) {
        throw err.message.replace(/^Error:\s*/, "")
    }
}
export async function verifyEmail(payload: forgotUserType) {
    try {
        const res = await fetch(
            `${AUTH_SERVER_URL}/account/verify-email`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: payload }),
            }
        )
        const j = await res.json()
        if (!j.success) {
            const errorMessage =
                j.message || "Unknown error"
            console.log(errorMessage)
            throw new Error(errorMessage)
        }
        return j
    } catch (err: any) {
        throw err.message.replace(/^Error:\s*/, "")
    }
}
