import React, { Component } from 'react';
import { getFromStorage, setInStorage } from '../../utils/storage';
import './index.css';

const localStorageObjectName = "login_system_storage";

class HomePage extends Component {
	constructor(props) {
 		super(props);

    	this.state = {
		    isLoading: true,
		    token: "",

		    isLoggedIn: false,
		    loginError: "",
		    loginEmail: "",
		    loginPassword: "",

		    signupError: "",
		    signupFullname: "",
		    signupUsername: "",
		    signupEmail: "",      
		    signupPassword: "",
    	};

	    this.loginEmail = this.loginEmail.bind(this);
	    this.loginPassword = this.loginPassword.bind(this);

	    this.signupFullname = this.signupFullname.bind(this);
	    this.signupUsername = this.signupUsername.bind(this);
	    this.signupEmail = this.signupEmail.bind(this);
	    this.signupPassword = this.signupPassword.bind(this);

	    this.onSignIn = this.onSignIn.bind(this);
	    this.onSignUp = this.onSignUp.bind(this);
	    this.onLogout = this.onLogout.bind(this);
  	}
  	

  	loginEmail(event) {
		this.setState({
      		loginEmail: event.target.value
    	});
  	}

  	loginPassword(event) {
    	this.setState({
      		loginPassword: event.target.value
    	});
  	}

  	signupFullname(event){
    	this.setState({
      		signupFullname: event.target.value
    	});
  	}

  	signupUsername(event) {
    	this.setState({
      		signupUsername: event.target.value
    	});
  	}

  	signupEmail(event) {
    	this.setState({
      		signupEmail: event.target.value
    	});
  	}

	signupPassword(event) {
		this.setState({
	    	signupPassword: event.target.value
	    });
	}

  
	componentDidMount() {
    	const obj = getFromStorage(localStorageObjectName);
    	if (obj && obj.token) {
      		const { token } = obj;

      		fetch(`http://localhost:4000/api/verify?token=${token}`)
        		.then(response => response.json())
        		.then(json => {
          			if (json.success) {
            			this.setState({
             				token,
              				isLoading: false
            			});
          			} else {
            			this.setState({
              				isLoading: false
            			});
          			}
        		});
    	} else {
      		this.setState({
        		isLoading: false
      		});
    	}
  	}


 	onSignUp() {
    	const { signupFullname, signupUsername, signupEmail, signupPassword } = this.state;

    	this.setState({
      		isLoading: true
    	});

    	fetch("http://localhost:4000/api/register", {
      		method: "POST",
      		headers: {
        		"Content-Type": "application/json"
      		},
      		body: JSON.stringify({
      			fullName: signupFullname,
      			username: signupUsername,
        		email: signupEmail,
        		password: signupPassword
      		})
    	})
      	.then(response => response.json())
      	.then(json => {
      		console.log(json.success);
        	if (json.success) {
	          	this.setState({
	            	isLoading: false,
	            	signupError: json.message,
	            	signupFullname: json.fullName,
	            	signupEmail: json.email,
	            	signupPassword: json.password,
					signupUsername: json.username,
	          	});
        	} else {
          		this.setState({
            		signupError: json.message,
            		isLoading: false
          		});
        	}
      	});
  	}


	onSignIn() {
		const { loginEmail, loginPassword } = this.state;

	    this.setState({
	    	isLoading: true,
	    	isLoggedIn: false
	    });

    	fetch("http://localhost:4000/api/login", {
      		method: "POST",
      		headers: {
       			"Content-Type": "application/json"
      		},
      		body: JSON.stringify({
        		email: loginEmail,
        		password: loginPassword
      		})
    	})
      	.then(res => res.json())
      	.then(json => {
        	if (json.success) {
          		setInStorage(localStorageObjectName, { token: json.token });
          		this.setState({            		
            		isLoading: false,
            		token: json.token,            		
            		loginError: json.message,
            		loginEmail: "",
            		loginPassword: ""
          		});
        	} else {
          		this.setState({
            		isLoading: false,
            		loginError: json.message

          		});
        	}
      	});
  	}


  	onLogout() {
	    this.setState({
	      isLoading: true
	    });
    	
    	const obj = getFromStorage(localStorageObjectName);
    	
    	if (obj && obj.token) {
      		const { token } = obj;

      		fetch(`http://localhost:4000/api/logout?token=${token}`)
        		.then(res => res.json())
        		.then(json => {
          			if (json.success) {
	            		this.setState({
	              			token: "",
	              			isLoading: false,
	              			isLoggedIn: false
	            		});
          			} else {
            			this.setState({
              				isLoading: false
            			});
          			}
        		});
    	} else {      
      		this.setState({
        		isLoading: false,
        		token: ""
      		});
    	}
  	}



	render() {
    	const {
      		isLoading,
      		token,
      		loginError,
      		loginEmail,
      		loginPassword,
      		signupFullname,
      		signupError,
      		signupUsername,
      		signupEmail,
      		signupPassword
    	} = this.state;

    	if (isLoading) {
      		return <p>We are loading...</p>;
    	}


    	if (!token) {
      		return (
      			<div>        
		          	<div>
		            	{loginError ? <p>{loginError}</p> : null}
		            	<p>Sign In</p>            
		            	<input
		              		type="email"
		              		placeholder="Enter Email"
		              		value={loginEmail}
		              		onChange={this.loginEmail}
		            	/>
		            	<br />
		            	<input
		              		type="password"
		              		placeholder="Enter Password"
		              		value={loginPassword}
		              		onChange={this.loginPassword}
		            	/>
		            	<br />
		            	<button onClick={this.onSignIn}>Sign In</button>
		          	</div>


	          		<div>            
	            		{signupError ? <p>{signupError}</p> : null}
	            		<p>Sign Up</p>
	            		<input
	              			type="text"
	              			placeholder="Enter Full Name"
	              			value={signupFullname}
	              			onChange={this.signupFullname}
	            		/>
	            		<br />            		
	            		<input
	              			type="text"
	              			placeholder="Enter Username"
	              			value={signupUsername}
	              			onChange={this.signupUsername}
	            		/>
	            		<br />
	            		<input
	              			type="email"
	              			placeholder="Enter Email"
	              			value={signupEmail}
	              			onChange={this.signupEmail}
	            		/>
	            		<br />
	            		<input
	              			type="password"
	              			placeholder="Enter Password"
	              			value={signupPassword}
	              			onChange={this.signupPassword}
	            		/>
	            		<br />
	            		<button onClick={this.onSignUp}>Sign Up</button>
	          		</div>
          		</div>     
      		);
    	}

    	return (
        	<div>
          		<p>Account</p>
          		<button onClick={this.onLogout}>Logout</button>
        	</div>
    	);
  	}
}

export default HomePage;