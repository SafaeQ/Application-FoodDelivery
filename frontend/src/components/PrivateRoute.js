import React, {useContext} from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ user, children }) => {
    if (!user) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };
 export default PrivateRoute;
