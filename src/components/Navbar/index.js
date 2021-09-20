import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/index';
import Logout from '../Logout/index';
import { Menu, Image } from 'semantic-ui-react'

class Navbar extends Component{
    render(){
        return (
            <div id="navbar">
                <Menu borderless="true" size='huge'>                
                        <Menu.Item className="menu-item">
                            <Image size="small" src="./bull-logo.png"/>
                        </Menu.Item>

                        <Menu.Menu position='right'>                                                                         
                            <Menu.Item className="menu-item">                            
                                <Login />                              
                            </Menu.Item>                            
                            <Menu.Item className="menu-item">
                                <Logout />                              
                            </Menu.Item>                            
                        </Menu.Menu>
                </Menu>
            </div>
        );
    }
}

export default Navbar;