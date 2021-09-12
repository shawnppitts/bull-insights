import React, { Component } from 'react';
import { Grid, Table} from 'semantic-ui-react';
import { BarChart, Bar, XAxis, YAxis, AreaChart, CartesianGrid, Tooltip, Area } from 'recharts';
import './index.css';

class BalanceSheet extends Component{

	render(){		
		const {data} = this.props;
		let balanceSheet = data.balancesheet;

		let orderedBalanceSheet = balanceSheet.map((val, index, array) => array[array.length - 1 - index]);
		// const currentRatio = balanceSheet.map((value, index) => {
		// 	let quickRatio = value.currentAssets / value.totalCurrentLiabilities;
		// 	quickRatio = quickRatio.toPrecision(3);			
		// });

		const financials = orderedBalanceSheet.map((value, index) => {
			return (
				  <Table key={index} celled className="bs-table">
				    	<Table.Header>
				      		<Table.Row>
				        		<Table.HeaderCell>{value.fiscalDate}</Table.HeaderCell>
				        		<Table.HeaderCell>Value</Table.HeaderCell>
				      		</Table.Row>
				    	</Table.Header>

				    	<Table.Body>
				      		<Table.Row>
				        		<Table.Cell>Accounts Payable</Table.Cell>
				        		<Table.Cell>{value.accountsPayable.toLocaleString(undefined, {maximumFractionDigits:3})}</Table.Cell>
				      		</Table.Row>
				      	    <Table.Row>
				       			<Table.Cell>Current Assets</Table.Cell>
				        		<Table.Cell>{value.currentAssets.toLocaleString(undefined, {maximumFractionDigits:3})}</Table.Cell>
				      		</Table.Row>
				      	    <Table.Row>
				       			<Table.Cell>Current LongTerm Debt</Table.Cell>
				        		<Table.Cell>{value.currentLongTermDebt.toLocaleString(undefined, {maximumFractionDigits:3})}</Table.Cell>
				      		</Table.Row>
				      	    <Table.Row>
				       			<Table.Cell>Total Assets</Table.Cell>
				        		<Table.Cell>{value.totalAssets.toLocaleString(undefined, {maximumFractionDigits:3})}</Table.Cell>
				      		</Table.Row>
				      	    <Table.Row>
				       			<Table.Cell>Total Liabilities</Table.Cell>
				        		<Table.Cell>{value.totalCurrentLiabilities.toLocaleString(undefined, {maximumFractionDigits:3})}</Table.Cell>
				      		</Table.Row>				      						      						      		
				    	</Table.Body>
				  </Table>
				)			
		})

	    return (
	    	<Grid columns="2">
	    		<Grid.Column id="c1">
	    			{financials}
				</Grid.Column>
				<Grid.Column id="c2" width="8">

					<Grid.Row>					
					<h3>Assets vs Liabilities</h3>
					<AreaChart padding={0} width={600} height={250} data={orderedBalanceSheet}>
						<defs>
						   	<linearGradient id="colorAssets" x1="0" y1="0" x2="0" y2="1">
						      	<stop offset="5%" stopColor="#4caf50" stopOpacity={0.8}/>
						      	<stop offset="95%" stopColor="#4caf50" stopOpacity={0}/>
						  	</linearGradient>
						  	<linearGradient id="colorLiabilities" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#f44336" stopOpacity={0.8}/>
								<stop offset="95%" stopColor="#f44336" stopOpacity={0}/>
							</linearGradient>
						</defs>
						<XAxis allowDataOverflow="true" dataKey="reportDate" />
						<YAxis hide="false"/>
						<CartesianGrid strokeDasharray="2 1 2" />
						<Tooltip />
						<Area type="linear" name="Total Assets" dataKey="totalAssets" stroke="#4caf50" fillOpacity={1} fill="url(#colorAssets)" />
						<Area type="linear" name="Total Liabilities" dataKey="totalLiabilities" stroke="#f44336" fillOpacity={1} fill="url(#colorLiabilities)" />					  	
					</AreaChart>
					</Grid.Row>

					<Grid.Row>
					<h3>Long-term Debt vs Short-term Debt</h3>
					<BarChart width={600} height={250} data={orderedBalanceSheet}>
						<CartesianGrid strokeDasharray="3 3 3" />
					  	<XAxis dataKey="reportDate" />
					  	<YAxis width={0}/>
					  	<Tooltip />
					  	<Bar name="Current Assets" dataKey="currentAssets" fill="#82ca9d" />
					 	<Bar name="Short-term debt" dataKey="totalCurrentLiabilities" fill="#8884d8" />
					</BarChart>
					</Grid.Row>

				</Grid.Column>
			</Grid>
	    );
	}
}

export default BalanceSheet;