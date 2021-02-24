import React, { Component } from 'react';
import { Image, Statistic, Menu } from 'semantic-ui-react';
import { LineChart, Line, XAxis, YAxis, AreaChart, CartesianGrid, Tooltip, Area } from 'recharts';
import './index.css';

class Dashboard extends Component{
	constructor(props){
		super(props);
	}


	render(){
		const { companyData, companyFinancials, companyChart, companyNews, price } = this.props;
		const companyHeader = `${companyData.companyName} | ${companyData.symbol}`;

		return(
			<div>
			<div className="dashboard-container">
					<div className="company-info-container">
						<h1 id="companyHeader">{companyHeader}</h1>
						<Statistic.Value id="stock-price" size="large">Stock Price: <span id="price">{price}</span></Statistic.Value>
						<div id="company-info-specifics">
							<p id="company-location">Location: {companyData.city}, {companyData.state}</p>
							<p id="company-industry">Industry: {companyData.industry}</p>
						</div>
					</div>
					<AreaChart width={500} height={250} data={companyChart}> 
						<defs>
					    	<linearGradient id="colorClose" x1="0" y1="0" x2="0" y2="1">
					      		<stop offset="5%" stopColor="#FFF" stopOpacity={1}/>
					      		<stop offset="95%" stopColor="#FFF" stopOpacity={1}/>
					  		</linearGradient>
					  		<linearGradient id="colorOpen" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#FFF" stopOpacity={1}/>
							    <stop offset="95%" stopColor="#FFF" stopOpacity={0.3}/>
						    </linearGradient>
					  	</defs>
					  	<XAxis dataKey="date" />
					  	<YAxis dataKey="close" />
					  	<CartesianGrid strokeDasharray="2 1 2" />
					  	<Tooltip />
					  	<Area type="linear" dataKey="open" stroke="#82ca9d" fillOpacity={1} fill="url(#colorOpen)" />
					  	<Area type="linear" dataKey="close" stroke="#0575E6" fillOpacity={1} fill="url(#colorClose)" />					  	
					</AreaChart>
			</div>
			<div className="tab-container">
				<Menu>
					<Menu.Item active>Company</Menu.Item>
					<Menu.Item>Financials</Menu.Item>
					<Menu.Item>News</Menu.Item>
				</Menu>
			</div>
			</div>
		)
	}
}

export default Dashboard;