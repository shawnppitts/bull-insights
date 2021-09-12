import React, { Component } from 'react';
import './index.css';

class CashFlow extends Component{
	constructor(props){
		super(props);		
	}

	render(){
		const {data} = this.props;
		console.log(data);
		return(
			<p>CashFlow</p>
		)
	}


}

export default CashFlow;
