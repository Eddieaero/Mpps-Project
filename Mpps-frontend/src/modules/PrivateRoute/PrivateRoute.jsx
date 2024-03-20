// import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn }) => {
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />; // Redirect to login on failure
    }

    return <Outlet />; // Render protected routes if authenticated
};

export default PrivateRoute;