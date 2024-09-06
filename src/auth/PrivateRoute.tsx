import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
    const isAuthenticated = localStorage.getItem('authenticated') === 'true';

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;