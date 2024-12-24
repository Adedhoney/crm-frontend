import { Routes, Route } from "react-router-dom"
import Login from "../components/auth/login"
import ForgotPassword from "../components/auth/forgot-password"
import ResetPassword from "../components/auth/reset-password"
import AcceptInvite from "../components/auth/accept-invite"

function AuthRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route
                path="/forgot-password"
                element={<ForgotPassword />}
            />
            <Route
                path="/reset-password/:id"
                element={<ResetPassword />}
            />
            <Route
                path="/accept-invite/:id"
                element={<AcceptInvite />}
            />
        </Routes>
    )
}

export default AuthRoutes
