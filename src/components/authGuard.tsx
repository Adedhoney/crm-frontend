import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';
import Spinner from './global/pageLoader';
import styled from 'styled-components';
export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
export default function AuthGuard() {
    const { auth, userDetails, isLoading } = useAuth();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        const redirectToLogin = () => {
            navigate('/auth/login');
        };
        if (!auth?.access_token) {
            timeoutId = setTimeout(redirectToLogin, 3000);
        }

        const checkAuth = () => {
            if (auth?.access_token && userDetails?.user?.userId) {
                clearTimeout(timeoutId);
            } else if (auth === undefined && auth === null && !isLoading) {
                console.log('me1');
                redirectToLogin();
            } else {
                console.log('me2');
                redirectToLogin();
            }
        };
        checkAuth();
        return () => {
            clearTimeout(timeoutId);
        };
    }, [auth, pathname, userDetails]);

    if (auth === null || auth === undefined) {
        return (
            <Loading>
                <Spinner />
            </Loading>
        );
    }

    return <Outlet />;
}
