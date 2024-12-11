import { useState } from "react"
import reactLogo from "./assets/react.svg"
import { ThemeProvider } from "styled-components"
import { themes } from "./theme/theme"
import viteLogo from "/vite.svg"
import "./App.css"
import {
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom"
import AuthRoutes from "./pages/auth"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
    const [count, setCount] = useState(0)

    return (
        <Router>
            <ThemeProvider theme={themes}>
                <Routes>
                    <Route
                        path="/auth/*"
                        element={<AuthRoutes />}
                    />
                </Routes>
                <ToastContainer
                    position="top-right"
                    className={"app__toast"}
                    bodyClassName={"app__toast__body"}
                    autoClose={5000}
                    closeButton={false}
                    hideProgressBar={true}
                    closeOnClick={true}
                    rtl={false}
                    draggable
                    pauseOnFocusLoss
                    theme="light"
                />
            </ThemeProvider>
        </Router>
    )
}

export default App

// <Router>
//             <div className="App">
//                 <Routes>
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/register" element={<Register />} />
//                     <Route path="/" element={<Dashboard />} />
//                     <Route
//                         path="/user-management"
//                         element={<UserManagement />}
//                     />
//                 </Routes>
//             </div>
//         </Router>
