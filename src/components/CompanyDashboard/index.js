import React, { Component } from 'react';
import { Statistic, Tab } from 'semantic-ui-react';
import { XAxis, YAxis, AreaChart, CartesianGrid, Tooltip, Area } from 'recharts';
import News from '../News/index';
import BalanceSheet from '../BalanceSheet/index';
import IncomeStatement from '../IncomeStatement/index';
import './index.css';

class CompanyDashboard extends Component{
	render(){
		const { companyData, companyChart, companyNews, price, income, balanceSheet, cashFlow } = this.props;			
		const companyHeader = `${companyData.companyName} | ${companyData.symbol}`;

		const panes = [
		  	{ menuItem: 'News', render: () => <Tab.Pane><News data={companyNews}/></Tab.Pane> },
		  	{ menuItem: 'Balance Sheet Analysis', render: () => <Tab.Pane><BalanceSheet data={balanceSheet}/></Tab.Pane> },
		  	{ menuItem: 'Income Statement Analysis', render: () => <Tab.Pane><IncomeStatement data={income}/></Tab.Pane> },
		  	{ menuItem: 'Cash Flow Analysis', render: () => <Tab.Pane data={cashFlow}>Cash Flow Analaysis</Tab.Pane> }

		];		

		const switchTabs = () => <Tab panes={panes} />
		return(
			<div>
				<div className="dashboard-container">
						<div className="company-info-container">
							<h1 id="companyHeader">{companyHeader}</h1>
							<Statistic.Value id="stock-price" size="large">Stock Price: <span id="price">{price}</span></Statistic.Value>
							<div id="company-info-specifics">
								<p id="company-ceo">CEO: {companyData.CEO}</p>
								<p id="company-location">Location: {companyData.city}, {companyData.state}</p>
								<p id="company-industry">Industry: {companyData.industry}</p>
								<p id="company-sector">Sector: {companyData.sector}</p>
								<p id="company-employees"> Employees: {companyData.employees}</p>
							</div>
						</div>
						<AreaChart width={500} height={250} data={companyChart}> 
							<defs>
						    	<linearGradient id="colorClose" x1="0" y1="0" x2="0" y2="1">
						      		<stop offset="5%" stopColor="#78ffd6" stopOpacity={1}/>
						      		<stop offset="95%" stopColor="#FFF" stopOpacity={0.5}/>
						  		</linearGradient>
						  		<linearGradient id="colorOpen" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor="#a8ff78" stopOpacity={1}/>
								    <stop offset="95%" stopColor="#a8ff78" stopOpacity={0.3}/>
							    </linearGradient>
						  	</defs>
						  	<XAxis dataKey="date" />
						  	<YAxis dataKey="close" />
						  	<CartesianGrid strokeDasharray="2 1 2" />
						  	<Tooltip />
						  	<Area type="linear" dataKey="open" stroke="#00C9FF" fillOpacity={1} fill="url(#colorOpen)" />
						  	<Area type="linear" dataKey="close" stroke="#00C9FF" fillOpacity={1} fill="url(#colorClose)" />					  	
						</AreaChart>
				</div>
				<div className="tab-container">
					{switchTabs()}
				</div>
			</div>
		)
	}
}

export default CompanyDashboard;