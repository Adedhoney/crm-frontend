import {
    ContentBox,
    Form,
    LogoBox,
    SubText,
    Wrapper,
} from "../style"
import Logo from "../../assets/hotelspaddie-green.png"
import { FormInput } from "../global/formInput"
// import { Link } from "react-router-dom"
import { LoginButton } from "../global/button"
import { FormEvent, useState } from "react"
import { loginUser } from "../../services/authService"
import { alerts } from "../../utils/alert"
import { useMutation } from "react-query"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const login = useMutation(loginUser, {
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error: any) => {
            setLoading(false)
            alerts.error(error.message, error)
            console.log("gets here")
        },
    })

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!password || !email) {
            alerts.error(
                "Error",
                "Please fill all the fields correctly"
            )
            return
        }
        setLoading(true)
        login.mutate({ email: email, password: password })
    }

    return (
        <Wrapper>
            <LogoBox>
                <img src={Logo} alt="logo" />
            </LogoBox>
            <ContentBox>
                <div className="box">
                    <h1 className="text">Welcome back</h1>
                    <p className="sub-text">
                        Log in to your account
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
                    <FormInput
                        label="Password"
                        type="password"
                        value={password}
                        stateHandler={setPassword}
                        holder="*********"
                    />
                </Form>
                <SubText>
                    <span
                        className="div"
                        to="/auth/forgot-password"
                    >
                        Forgot password?
                    </span>
                </SubText>
                <div className="buttons">
                    <LoginButton
                        onClick={onSubmit}
                        // disabled={!password || !email}
                        loading={loading}
                    >
                        Log in
                    </LoginButton>
                    <SubText>
                        <span className="span-new">or</span>
                    </SubText>

                    <SubText>
                        Don’t have an account?{" "}
                        <span className="span">
                            {" "}
                            Check your email for an invite
                        </span>
                    </SubText>
                </div>
            </ContentBox>
        </Wrapper>
    )
}

export default Login