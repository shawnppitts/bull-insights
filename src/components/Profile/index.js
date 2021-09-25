import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Dropdown } from 'semantic-ui-react';
import './index.css';


class Profile extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const { user } = this.props;
		const options = [
			{
			    key: 'user',
			    value: `${user.email}`,
				image: { avatar: true, src: `${user.picture}` },
			},
			{
			    key: 'billing',
			    value: 'billing',
				text: 'Billing',
			}			
		]

		return(
			<Dropdown       
				inline
      			options={options}
      			defaultValue={options[0].value}
      		/>
		)
	}
}

export default Profile;