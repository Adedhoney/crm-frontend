import { AUTH_SERVER_URL } from "../config/config"
import {
    IAcceptUserInvite,
    ILogin,
    IResetPassword,
    IVerifyOtp,
} from "../Interfaces/user"
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
        if (j.status !== "success") {
            const errorMessage =
                j.message || "Unknown error"
            console.log(errorMessage)
            throw new Error(errorMessage)
        }
        return j.data
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
        if (j.status !== "success") {
            const errorMessage =
                j.message || "Unknown error"
            console.log(errorMessage)
            throw new Error(errorMessage)
        }
        return j.data
    } catch (err: any) {
        throw err.message.replace(/^Error:\s*/, "")
    }
}
export async function acceptInvite(data: {
    inviteId: string
    payload: IAcceptUserInvite
}) {
    try {
        const res = await fetch(
            `${AUTH_SERVER_URL}/account/accept-invite/${data.inviteId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data: data.payload,
                }),
            }
        )
        const j = await res.json()
        if (j.status !== "success") {
            const errorMessage =
                j.message || "Unknown error"
            console.log(errorMessage)
            throw new Error(errorMessage)
        }
        return j.data
    } catch (err: any) {
        throw err.message.replace(/^Error:\s*/, "")
    }
}
export async function getInvite(inviteId: string) {
    try {
        const res = await fetch(
            `${AUTH_SERVER_URL}/account/invites/${inviteId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        const j = await res.json()
        if (j.status !== "success") {
            const errorMessage =
                j.message || "Unknown error"
            console.log(errorMessage)
            throw new Error(errorMessage)
        }
        return j.data
    } catch (err: any) {
        throw err.message.replace(/^Error:\s*/, "")
    }
}
export async function forgotPassword(email: string) {
    try {
        const res = await fetch(
            `${AUTH_SERVER_URL}/account/forgot-password/${email}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        const j = await res.json()
        if (j.status !== "success") {
            const errorMessage =
                j.message || "Unknown error"
            console.log(errorMessage)
            throw new Error(errorMessage)
        }
        return j.data
    } catch (err: any) {
        throw err.message.replace(/^Error:\s*/, "")
    }
}
export async function verifyOTP(payload: IVerifyOtp) {
    try {
        const res = await fetch(
            `${AUTH_SERVER_URL}/account/verify-otp`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: payload }),
            }
        )
        const j = await res.json()

        if (j.status !== "success") {
            const errorMessage =
                j.message || "Unknown error"
            console.log(errorMessage)
            throw new Error(errorMessage)
        }
        return j.data
    } catch (err: any) {
        throw err.message.replace(/^Error:\s*/, "")
    }
}

export async function resetPassword(
    payload: IResetPassword
) {
    try {
        const res = await fetch(
            `${AUTH_SERVER_URL}/account/reset-password`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: payload }),
            }
        )
        const j = await res.json()
        if (j.status !== "success") {
            const errorMessage =
                j.message || "Unknown error"
            throw new Error(errorMessage)
        }
        return j.data
    } catch (err: any) {
        throw err.message.replace(/^Error:\s*/, "")
    }
}
