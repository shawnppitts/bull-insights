import React from 'react';
import Login from '../Login/index';
import Logout from '../Logout/index';
import { Menu, Image } from 'semantic-ui-react';
import './index.css';

const Navbar = () => {
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
                            <Menu.Item>                            
                                <Login />                              
                            </Menu.Item>                            
                            <Menu.Item>
                                <Logout />                              
                            </Menu.Item>                            
                        </Menu.Menu>
                </Menu>
            </div>
    )   
}

export default Navbar;