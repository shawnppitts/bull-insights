import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'semantic-ui-react';
import './index.css';
 
const Logout = () => {
    const { logout } = useAuth0();

    return(
    	<Button id="logout-btn" onClick={() => logout()}>Logout</Button>        
    );
}

export default Logout;