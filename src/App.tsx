import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { ThemeProvider } from 'styled-components';
import { themes } from './theme/theme';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthRoutes from './pages/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './providers/AuthProvider';
import { GlobalStyle } from './style';
import AppRoutes from './pages/approutes';

function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <AuthProvider>
                <ThemeProvider theme={themes}>
                    <GlobalStyle />
                    <Routes>
                        <Route path="/auth/*" element={<AuthRoutes />} />
                        <Route path="/*" element={<AppRoutes />} />
                    </Routes>
                    <ToastContainer
                        position="top-right"
                        className={'app__toast'}
                        bodyClassName={'app__toast__body'}
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
            </AuthProvider>
        </Router>
    );
}

export default App;
