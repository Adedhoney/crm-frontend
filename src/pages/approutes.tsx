import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from '../components/protectedRoute';
import InnerContent from '../components/protectedRoute/innerContent';
import AuthGuard from '../components/authGuard';
import Layout from '../components/layout';
import Client from '../components/client';
import CreateClient from '../components/client/createClient';
import ViewUpdateClient from '../components/client/viewClient';
import Contact from '../components/contact';
import CreateContact from '../components/contact/createContact';
const AppRoutes = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<ProtectedRoutes />}>
                        <Route path="/" element={<InnerContent />}>
                            <Route path="/" element={<AuthGuard />}>
                                <Route path="/client" element={<Client />} />
                                <Route
                                    path="/client/create"
                                    element={<CreateClient />}
                                />
                                <Route
                                    path="/client/:id"
                                    element={<ViewUpdateClient />}
                                />
                                <Route path="/contact" element={<Contact />} />
                                <Route
                                    path="/contact/create"
                                    element={<CreateContact />}
                                />
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </Layout>
        </>
    );
};

export default AppRoutes;
