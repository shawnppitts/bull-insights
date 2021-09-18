import React, { Component } from "react";
import { Form, Input, Button } from 'semantic-ui-react'
import axios from 'axios';
import './index.css';

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.login = this.login.bind(this);
    }

    setUsername(event){
        this.setState({username: event.target.value});
    }

    setPassword(event){
        this.setState({password: event.target.value});
    }    

    login(event){
        event.preventDefault();

        const userDetails = {
            username: this.state.username,
            password: this.state.password
        }
        const registerUrl = "http://localhost:4000/v1/login";

        axios.post(registerUrl, userDetails)
            .then(response => {
                console.log(response.data);
            });
    }  

    render(){
        return (
            <div className="flex-wrapper">
                <h1 className="flex-header">Login</h1>
                <Form onSubmit={this.login}>
                    <Form.Field required>
                        <label className="input-label">Username</label>
                        <Input onChange={this.setUsername} className="login-inputs" placeholder='Enter Username' />
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