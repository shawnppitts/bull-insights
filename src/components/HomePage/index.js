import React from 'react';
import HomeDashboard from '../HomeDashboard/index';
import { useAuth0 } from "@auth0/auth0-react";
import './index.css';

const HomePage = () => {
	const { isAuthenticated } = useAuth0();

    return (
    	isAuthenticated && (
    		<HomeDashboard />
    	)
    	
    );  	
}

export default HomePage;