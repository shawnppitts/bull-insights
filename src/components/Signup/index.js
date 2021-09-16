import React, { Component } from "react";
import { Form, Input, Button } from 'semantic-ui-react'
import './index.css';

class Signup extends Component{

    constructor(props){
        super(props);
        this.state = {
            fullName: "",
            username: "",
            password: ""
        }
        this.setFullname = this.setFullname.bind(this);        
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.register = this.register.bind(this);
    }

    setFullname(event){
        this.setState({fullName: event.target.value});
    }

    setUsername(event){
        this.setState({username: event.target.value});
    }

    setPassword(event){
        this.setState({password: event.target.value});
    }

    register(){
        console.log(this.state);
    } 

    render(){
        return (
            <div className="flex-wrapper">
                <Form>
                    <h1 className="flex-header">Sign Up</h1>
                    <Form.Field required>
                        <label className="input-label">Full Name</label>
                        <Input onChange={this.setFullname} className="login-inputs" placeholder='Enter Name' />
                    </Form.Field>                                        
                    <Form.Field required>
                        <label className="input-label">Username</label>
                        <Input onChange={this.setUsername} className="login-inputs" placeholder='Enter Username' />
                    </Form.Field>
                    <Form.Field required>
                        <label className="input-label">Password</label>
                        <Input onChange={this.setPassword} className="login-inputs" type="password" placeholder='Enter Password' />
                    </Form.Field>
                    <div id="submit-btn-wrapper"> 
                        <Button onClick={this.register} id="submit" size="big" type='submit'>Signup</Button>
                    </div>                   
                </Form>
            </div>
        );
    }    
}

export default Signup;