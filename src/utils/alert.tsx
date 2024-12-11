import React from "react"
import { toast } from "react-toastify"
import AppToast from "../components/global/toast"
import AlertSuccess from "../assets/svg/AlertSuccess.svg"
import AlertError from "../assets/svg/AlertError.svg"
export const alerts = {
    success: (
        heading: React.ReactNode,
        body: React.ReactNode,
        duration?: number
    ) => {
        const existingToast: any =
            toast.isActive("success-toast")
        if (existingToast) {
            // If there's an existing success toast, replace it
            toast.update(existingToast, {
                render: (
                    <AppToast
                        heading={heading}
                        body={body}
                    />
                ),
                autoClose: duration || 5000, // Default duration to 5 seconds if not provided
            })
        } else {
            // Display new success toast
            toast(
                <AppToast heading={heading} body={body} />,
                {
                    icon: <img src={AlertSuccess} />,
                    autoClose: duration || 5000, // Default duration to 5 seconds if not provided
                    toastId: "success-toast", // Specify toastId to replace existing toast
                }
            )
        }
    },
    error: (
        heading: React.ReactNode,
        body: React.ReactNode,
        duration?: number
    ) => {
        const existingToast: any =
            toast.isActive("error-toast")
        if (existingToast) {
            // If there's an existing error toast, replace it
            toast.update(existingToast, {
                render: (
                    <AppToast
                        heading={heading}
                        body={body}
                    />
                ),
                autoClose: duration || 5000, // Default duration to 5 seconds if not provided
            })
        } else {
            // Display new error toast
            toast(
                <AppToast heading={heading} body={body} />,
                {
                    icon: <img src={AlertError} />,
                    autoClose: duration || 5000, // Default duration to 5 seconds if not provided
                    toastId: "error-toast", // Specify toastId to replace existing toast
                }
            )
        }
    },
}
