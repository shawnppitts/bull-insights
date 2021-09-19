import React, { Component } from "react";
import { Form, Input, Button } from 'semantic-ui-react';
import axios from 'axios';
import './index.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            loginDetails: {
                message: "",
                success: "",
                token: "" 
            }           
        }
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.login = this.login.bind(this);
    }

    setEmail(event){
        this.setState({email: event.target.value});
    }

    setPassword(event){
        this.setState({password: event.target.value});
    }    

    login(event){
        const { email, password } = this.state;

        const userDetails = {
            email,
            password
        }
        const registerUrl = "http://localhost:4000/api/login";

        axios.post(registerUrl, userDetails)
            .then(response => {
                const {success, message, token} = response.data;                
                if (success){
                    this.setState({
                        loginDetails: {
                            message,
                            success,
                            token
                        }
                    });
                    console.log(`${message}`);
                    this.props.sendLoginDetails(this.state.loginDetails);                
                } else {
                    this.setState({
                        loginDetails: {
                            message,
                            success,
                            token
                        }
                    });
                }
            });
    }  

    render(){
        return (
            <div className="flex-wrapper">
                <h1 className="flex-header">Login</h1>
                <Form >
                    <Form.Field required>
                        <label className="input-label">Email</label>
                        <Input onChange={this.setEmail} className="login-inputs" placeholder='Enter Email' />
                    </Form.Field>
                    <Form.Field required>
                        <label className="input-label">Password</label>
                        <Input onChange={this.setPassword} className="login-inputs" type="password" placeholder='Enter Password' />
                    </Form.Field>
                    <div id="submit-btn-wrapper"> 
                        <Button onClick={this.login} id="submit" size="big" type='submit'>Login</Button>
                    </div>                   
                </Form>
            </div>
        );
    }    
}

export default Login;