import React, { Component } from 'react';
import { Menu, Image, Button } from 'semantic-ui-react'

class Navbar extends Component{
    constructor(props) {
        super(props);

        this.state = {
            showSignup: false,
            showLogin: false
        };

        this.setSignupState = this.setSignupState.bind(this);
        this.setLoginState = this.setLoginState.bind(this);
    }

    setSignupState(event){
        event.preventDefault();
        this.setState({
            showSignup: true,
        });
        
        console.log(this.state);
    }

    setLoginState(event){
        event.preventDefault();
        this.setState({
            showLogin: true
        });
        console.log(this.state);
    }

    render(){
        return (
            <div id="navbar">
                <Menu borderless={true} size='huge'>                
                        <Menu.Item className="menu-item">
                            <Image size="small" src="./bull-logo.png"/>
                        </Menu.Item>

                        <Menu.Menu position='right'>                                                                         
                            <Menu.Item className="menu-item">                            
                                <Button onClick={this.setLoginState} className="actions">LOGIN</Button>
                            </Menu.Item>                            
                            <Menu.Item className="menu-item">
                                <Button onClick={this.setSignupState} className="actions">SIGNUP</Button>
                            </Menu.Item>                            
                        </Menu.Menu>
                </Menu>
            </div>
        );
    }
}

export default Navbar;