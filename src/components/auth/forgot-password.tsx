import React, { useState } from "react"
import { Wrapper, LogoBox, ContentBox, Form } from "./style"
import { useNavigate } from "react-router-dom"
import { alerts } from "../../utils/alert"
import { useMutation } from "react-query"
import { forgotPassword } from "../../services"
import Logo from "../../assets/hotelspaddie-green.png"
import { FormInput } from "../global/formInput"
import { LoginButton } from "../global/button"

const ForgotPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const onSubmit = () => {
        if (!email) {
            alerts.error(
                "Error",
                "Please enter your email address."
            )
            return
        }
        setLoading(true)
        ForgottenPassword.mutate(email)
    }
    const ForgottenPassword = useMutation(forgotPassword, {
        onSuccess: (data) => {
            setEmail("")
            setLoading(false)
            alerts.success(
                "OTP Success",
                "OTP sent successfully"
            )
            navigate(`/auth/reset-password/${email}`)
        },
        onError: (error: any) => {
            setLoading(false)
            alerts.error("Verification Failed", error)
        },
    })
    return (
        <Wrapper>
            <LogoBox>
                <img src={Logo} alt="logo" />
            </LogoBox>
            <ContentBox>
                <div className="box">
                    <h1 className="text">
                        Forgot Password
                    </h1>
                    <p className="sub-text">
                        Enter the email address associated
                        with your account
                    </p>
                </div>
                <Form>
                    <FormInput
                        label="Email address"
                        type="email"
                        value={email}
                        stateHandler={setEmail}
                        holder="name@example.com"
                    />
                </Form>
                <div className="buttons">
                    <LoginButton
                        onClick={onSubmit}
                        disabled={!email}
                        loading={loading}
                    >
                        Send OTP
                    </LoginButton>
                </div>
            </ContentBox>
        </Wrapper>
    )
}

export default ForgotPassword
