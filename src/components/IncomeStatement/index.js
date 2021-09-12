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
			<p>IncomeStatement</p>
		)
	}


}

export default IncomeStatement;
