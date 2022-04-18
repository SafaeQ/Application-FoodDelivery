// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ user, children }) => {
//     if (!user) {
//       return <Navigate to="/login" replace />;
//     }
  
//     return children;
//   };
//  export default PrivateRoute;

import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
const { loading, isAuthenticated } = useSelector((state) => state.user);

if (loading) return null;

return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

