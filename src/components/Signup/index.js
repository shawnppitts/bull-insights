import React, { Component } from "react";
import { Form, Input, Button } from 'semantic-ui-react'
import './index.css';

class Signup extends Component{  
    render(){
        return (
            <div className="flex-wrapper">
                <Form>
                    <h1 className="flex-header">Sign Up</h1>
                    <Form.Field required>
                        <label className="input-label">Full Name</label>
                        <Input className="login-inputs" placeholder='Enter Name' />
                    </Form.Field>                                        
                    <Form.Field required>
                        <label className="input-label">Username</label>
                        <Input className="login-inputs" placeholder='Enter Username' />
                    </Form.Field>
                    <Form.Field required>
                        <label className="input-label">Password</label>
                        <Input className="login-inputs" type="password" placeholder='Enter Password' />
                    </Form.Field>
                    <div id="submit-btn-wrapper"> 
                        <Button id="submit" size="big" type='submit'>Signup</Button>
                    </div>                   
                </Form>
            </div>
        );
    }    
}

export default Signup;