import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';

const ProtectedRoutes = (props: any) => {
    const { auth, userDetails } = useAuth();
    return auth && auth.access_token && userDetails?.user?.userId ? (
        <Outlet />
    ) : (
        <Navigate to="/auth/login" />
    );
};
export default ProtectedRoutes;
