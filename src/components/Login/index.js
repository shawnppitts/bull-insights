import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'semantic-ui-react';
import './index.css';
 
const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return(
        !isAuthenticated && (
            <Button onClick={() => loginWithRedirect()}>Login</Button>
        )
    );
}

export default Login;