import React, {useContext} from 'react';
import { Route, Navigate } from 'react-router-dom';

import { AuthContext } from './AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authcontext = useContext(AuthContext);
    const {isAuthenticated, loading} = authcontext;
        return (
            <Route
                {...rest}
                render = { props => 
                !isAuthenticated && !loading ? (
                    <Navigate to='/login'/>
                ): (
                    <Component {...props}/>
                )

                } 
            />
        )
}
 export default PrivateRoute;
