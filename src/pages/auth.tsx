import { Routes, Route } from "react-router-dom"
import Login from "../components/auth/login"

function AuthRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default AuthRoutes
