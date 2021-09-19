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
            loginMessage: "",
            loginSuccess: "",
            token: ""
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
                console.log(response);
                const {success, message} = response.data;                
                if (success){
                    this.setState({
                        signUpMessage: message,
                        signUpSuccess: success
                    });
                    console.log(message);
                } else {
                    this.setState({
                        signUpMessage: message,
                        signUpSuccess: success
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