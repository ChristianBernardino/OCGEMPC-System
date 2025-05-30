// ProtectedRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {getCookie} from '../authentication/getCookie';

const ProtectedRoute = ({ element, allowedRoles }) => {
  const userRole = getCookie('role_name');
  const location = useLocation();

  if (!userRole) {
    // Redirect to login page if not authenticated
    // return <Navigate to="/" state={{ from: location }} />;
    return <Navigate to="/access-request" state={{ from: location.pathname + location.search }} replace />
  }

  if (!allowedRoles.includes(userRole)) {
    // Redirect to a "not authorized" page or home if the role is not allowed
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
