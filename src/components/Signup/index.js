import React, { Component } from "react";
import './index.css';

class Signup extends Component{  
    render(){
        return (
            <div className="login-wrapper">
                <h1>Signup:</h1>
                <form>
                    <label>
                        <p>Username:</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>Password:</p>
                        <input type="password" />
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }    
}

export default Signup;