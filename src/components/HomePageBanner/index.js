import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './index.css';

const HomePage = () => {
	const { isAuthenticated } = useAuth0();

    return (
    	!isAuthenticated && (
    		<div>
    			<h1 id="company-banner">BULL INSIGHTS</h1>
    			<p id="company-description">Making company financials easier to understand!</p>
    		</div>
    	)    	
    );  	
}

export default HomePage;