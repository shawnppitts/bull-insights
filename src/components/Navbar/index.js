import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react'

class Navbar extends Component{
    render(){
        return (
            <div id="navbar">
                <Menu borderless="true" size='huge'>                
                        <Menu.Item className="menu-item">
                            <Link to="/">
                                <Image size="small" src="./bull-logo.png"/>
                            </Link>
                        </Menu.Item>

                        <Menu.Menu position='right'>                                                                         
                            <Menu.Item className="menu-item">                            
                                <Link to="/login">
                                    <p className="actions">LOGIN</p>
                                </Link>                               
                            </Menu.Item>                            
                            <Menu.Item className="menu-item">
                                <Link to="/signup">
                                    <p className="actions">SIGNUP</p>
                                </Link>                               
                            </Menu.Item>                            
                        </Menu.Menu>
                </Menu>
            </div>
        );
    }
}

export default Navbar;