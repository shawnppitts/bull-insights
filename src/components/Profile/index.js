import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Image } from 'semantic-ui-react';
import './index.css';
 
const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return(
    	isAuthenticated && (
	        <div>
	        	<Image src={user.picture}/>
	        	<h1>{user.name}</h1>
	        	<p>{user.email}</p>
	        	{JSON.stringify(user, null, 2)}
	        </div>
        )
    );
}

export default Profile;