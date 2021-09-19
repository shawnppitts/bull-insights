import React, { Component } from 'react';
import { getFromStorage} from '../../utils/storage';
import HomeDashboard from '../HomeDashboard/index';
import axios from 'axios';
import './index.css';

class HomePage extends Component {
	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			token: ''
		}
	}

	componentDidMount(){
		const token = getFromStorage('app');
		if (token) {
			// Verify Token

	        axios.get(`/api/verify?token=${token}`, )
	            .then(response => response.json())
	            .then(json => {
	            	if (json.success){
	            		this.setState({
	            			token,
	            			isLoading: false
	            		});
	            	} else {
	            		this.setState({
	            			isLoading: false
	            		});
	            	}
	            })	               			
		} else {
			this.setState({
				isLoading: false
			})
		}
	}

	render(){
		const { isLoading, token } = this.state;

		if (isLoading){
			return (<div><p>Loading...</p></div>)
		}

		if (!token){
			return (
				<div>
					<h1>Welcome to Bull Insights!</h1>
				</div>
			)
		}
		return (
			<div>
				<HomeDashboard />
			</div>
		);
	}
}

export default HomePage;