import React, { Component } from 'react';
import './index.css';

class IncomeStatement extends Component{
	constructor(props){
		super(props);		
	}

	render(){
		const {data} = this.props;
		console.log(data);
		return(
			<h1>IncomeStatement</h1>
		)
	}


}

export default IncomeStatement;
