import React from 'react';
import Login from '../Login/index';
import Logout from '../Logout/index';
import Profile from '../Profile/index';
import { useAuth0 } from "@auth0/auth0-react";
import { Menu, Image } from 'semantic-ui-react';
import './index.css';

const Navbar = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <Menu id="menu-container" borderless="true" vertical size="large">                
            <Menu.Item className="nav-header">
                { isAuthenticated ? <Profile user={user}/> : <Image id="logo" id="nav-logo" src="https://bull-insights.s3.amazonaws.com/images/bull-logo.png"/> }
            </Menu.Item>

            <div id="menu-item-container">
                <Menu.Item className="menu-item">
                    <h3 className="link">Market News</h3>                              
                </Menu.Item>            
                <Menu.Item className="menu-item">                            
                    <h3 className="link">Blog</h3>                              
                </Menu.Item>                                    
                <Menu.Item className="menu-item">                            
                    <h3 className="link">Cryptocurrency</h3>                              
                </Menu.Item>
                <Menu.Item className="menu-item">                            
                    <h3 className="link">Forex</h3>                              
                </Menu.Item>
                <Menu.Item className="menu-item">                            
                    <h3 className="link">Commodities</h3>                              
                </Menu.Item>                                
            </div>
            
            <div id="login-container">     
                <Menu.Item className="menu-item">                            
                    {isAuthenticated ? <Logout /> : <Login /> }
                </Menu.Item>
            </div>                                                                                                                                                                                                                           
        </Menu>
    )   
}

export default Navbar;