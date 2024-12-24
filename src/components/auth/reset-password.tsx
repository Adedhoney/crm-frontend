import React, { useState } from "react"
import { Wrapper, LogoBox, ContentBox, Form } from "./style"
import Logo from "../../assets/hotelspaddie-green.png"
import { Link, useParams } from "react-router-dom"
import { useMutation } from "react-query"
import { LoginButton } from "../global/button"
import { alerts } from "../../utils/alert"
import { resetPassword, verifyOTP } from "../../services"
import { FormInput } from "../global/formInput"
const ResetPassword = () => {
    const [otp, setOtp] = useState("")
    const { id }: any = useParams()
    const [loading, setLoading] = useState(false)
    const [verified, setVerified] = useState(false)
    const [otpVerified, setOtpVerified] = useState(false)
    const [otpToken, setOtpToken] = useState("")
    const [password, setPassword] = useState("")
    const onSubmit = () => {
        if (otp.length !== 4) {
            alerts.error(
                "Error",
                "OTP must be  4 characters."
            )
            return
        }
        setLoading(true)
        Verification.mutate({
            email: id,
            otp: otp,
        })
    }
    const Verification = useMutation(verifyOTP, {
        onSuccess: (data) => {
            setLoading(false)
            alerts.success(
                "Verification Success",
                "Email successfully verified"
            )
            setOtpVerified(true)
            setOtpToken(data.data.otpToken)
        },
        onError: (error: any) => {
            setLoading(false)
            alerts.error("Verification Failed", error)
        },
    })
    const onSubmitPassword = () => {
        if (password.length < 6) {
            alerts.error(
                "Error",
                "Password must contain at least 6 characters."
            )
            return
        }
        setLoading(true)
        VerificationPassword.mutate({
            otpToken,
            newPassword: password,
        })
    }
    const VerificationPassword = useMutation(
        resetPassword,
        {
            onSuccess: (data) => {
                setLoading(false)
                alerts.success(
                    "Verification Success",
                    data.message
                )
                setVerified(true)
            },
            onError: (error: any) => {
                setLoading(false)
                alerts.error("Verification Failed", error)
            },
        }
    )
    return (
        <Wrapper>
            <LogoBox>
                <img src={Logo} alt="logo" />
            </LogoBox>
            {!otpVerified && !verified && (
                <ContentBox>
                    <div className="box">
                        <h1 className="text">
                            Password reset link sent
                        </h1>
                        <p className="sub-text">
                            We’ve sent a link to{" "}
                            <span>{id}</span> to allow you
                            reset your password
                        </p>
                    </div>
                    <Form>
                        <FormInput
                            label="4-digit code"
                            type="input"
                            value={otp}
                            stateHandler={setOtp}
                        />
                    </Form>
                    <div className="buttons">
                        <LoginButton
                            onClick={onSubmit}
                            disabled={!otp}
                            loading={loading}
                        >
                            Reset Password
                        </LoginButton>
                    </div>
                </ContentBox>
            )}
            {otpVerified && !verified && (
                <ContentBox>
                    <div className="box">
                        <h1 className="text">
                            Reset Password
                        </h1>
                        <p className="sub-text">
                            Create a new password that is
                            secure and easy to remember
                        </p>
                    </div>
                    <Form>
                        <FormInput
                            label="Enter a strong password"
                            type="password"
                            value={password}
                            stateHandler={setPassword}
                            holder="*********"
                        />
                    </Form>
                    <div className="buttons">
                        <LoginButton
                            onClick={onSubmitPassword}
                            disabled={!password}
                            loading={loading}
                        >
                            Create new password
                        </LoginButton>
                    </div>
                </ContentBox>
            )}
            {otpVerified && verified && (
                <ContentBox>
                    <div className="box">
                        <h1 className="text">
                            New password created
                        </h1>
                        <p className="sub-text">
                            You’ve created a new password
                            and your account is now secure
                        </p>
                    </div>
                    <div className="buttons">
                        <Link to="/auth/login">
                            <LoginButton>
                                Log in to dashboard
                            </LoginButton>
                        </Link>
                    </div>
                </ContentBox>
            )}
        </Wrapper>
    )
}

export default ResetPassword
