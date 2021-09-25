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
            <div id="navbar">
                <Menu borderless="true" size='huge'>                
                        <Menu.Item className="menu-item">
                            <Image id="logo" size="small" src="https://bull-insights.s3.amazonaws.com/images/bull-logo.png"/>
                        </Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item>                            
                                <h3 className="menu-item">News</h3>                              
                            </Menu.Item>
                            <Menu.Item>                            
                                <h3 className="menu-item">Blog</h3>                              
                            </Menu.Item>
                            <Menu.Item>                            
                                <h3 className="menu-item">Company</h3>                              
                            </Menu.Item>
                            {
                                isAuthenticated ? 
                                    <Menu.Item>
                                        <Profile user={user}/>
                                    </Menu.Item>
                                : <div></div>
                            }                                                                                                                                                                                      
                            <Menu.Item>                            
                                {isAuthenticated ? <Logout /> : <Login /> }
                            </Menu.Item>                            
                        </Menu.Menu>
                </Menu>
            </div>
    )   
}

export default Navbar;