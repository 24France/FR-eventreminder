import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const token = localStorage.getItem('auth_token'); // Get the token from localStorage

    // If the user is authenticated (has token), redirect to /users or another protected route
    return token ? <Navigate to="/users" /> : children; // Render children if not authenticated
};

export default PublicRoute;
