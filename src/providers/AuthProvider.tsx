import React, { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { currentUser } from '../services/authService';
import { useQuery } from 'react-query';
import Spinner from '../components/global/pageLoader';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { alerts } from '../utils/alert';
export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [userDetails, setUserDetails] = useState<any>({});
    const [userToken, setUserToken] = useState<any>();
    const [auth, setAuth, removeAuth] = useLocalStorage<any>('auth');
    const [isLoadingAuth, setIsLoadingAuth] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;
    const { isLoading, isError, data, error } = useQuery(
        'fetchCurrentUser',
        async () => {
            if (pathname !== '/') {
                const data = await currentUser();
                setUserDetails(data);
                if (pathname.includes('auth')) {
                    navigate('/dashboard');
                }
                return data;
            }
        },
        {
            staleTime: 5 * (60 * 1000),
            cacheTime: 10 * (60 * 1000),
        },
    );

    React.useEffect(() => {
        if (!isLoading && !isError && data?.user?.userId) {
            console.log(data, 'data');
            setUserDetails(data);
            setAuth({ access_token: 'true' });
        } else if (isError) {
            removeAuth();
        }
    }, [isLoading, isError, data, setAuth, removeAuth]);

    if (
        (isLoading || isLoadingAuth) &&
        pathname !== '/' &&
        !pathname.includes('auth')
    ) {
        return (
            <Loading>
                <Spinner />
            </Loading>
        );
    }

    return (
        <>
            <AuthContext.Provider
                value={{
                    userDetails,
                    userToken,
                    auth,
                    setAuth,
                    removeAuth,
                    isLoading,
                }}
            >
                {children}
            </AuthContext.Provider>
        </>
    );
};
const AuthContext = createContext<any>({});

export function useAuth() {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export default AuthContext;
