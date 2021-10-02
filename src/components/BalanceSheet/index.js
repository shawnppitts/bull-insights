import React, { Component } from 'react';
import { Label, Table, Grid} from 'semantic-ui-react';
import { XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Tooltip, Bar, BarChart, Legend } from 'recharts';
// import PopupModal from '../PopupModal/index';
import './index.css';

class BalanceSheet extends Component{
	constructor(props){
		super(props);
		this.state = {
			toggleView: '',
		}
        this.toggleView = this.toggleView.bind(this);
	}

	toggleView(event){
		this.setState({
			toggleView: event.target.innerText
		});
	}

	render(){		
		const {data} = this.props;
		let balanceSheet = data.balancesheet;

		// Reversed order for charts
		let orderedBalanceSheet = balanceSheet.map((val, index, array) => array[array.length - 1 - index]);

		const formatNumber = (value) => {
			let inThousands = value / 1000;

			return inThousands.toLocaleString(undefined, {maximumFractionDigits:0})
		}

		const financialsTable = () => {	
			return (				
				 	<Table compact celled className="bs-table">
				    	<Table.Header>
				      		<Table.Row>
				      			<Table.HeaderCell>Report Period:</Table.HeaderCell>
				      			{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.HeaderCell key={index}>{value.fiscalDate}</Table.HeaderCell>)
				      				})
				      			}
				      		</Table.Row>
				    	</Table.Header>
				    	<Table.Body>
				      		<Table.Row>
				        		<Table.Cell active>Current Assets</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell active key={index}>{formatNumber(value.currentAssets)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>
				      		<Table.Row>
				        		<Table.Cell>Current Cash</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell key={index}>{formatNumber(value.currentCash)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>
				      		<Table.Row>
				        		<Table.Cell>Receivables</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell key={index}>{formatNumber(value.receivables)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>				      		
				      		<Table.Row>
				        		<Table.Cell>Inventory</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell key={index}>{formatNumber(value.inventory)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>
				      		<Table.Row>
				        		<Table.Cell>Short Term Investments</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell key={index}>{formatNumber(value.shortTermInvestments)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>				      						      		
				      		<Table.Row>
				        		<Table.Cell>Other Current Assets</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell key={index}>{formatNumber(value.otherCurrentAssets)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>

				      		<Table.Row>
				        		<Table.Cell active>Long Term Assets</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell active key={index}>{formatNumber(value.totalAssets)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>
				      		<Table.Row>
				        		<Table.Cell>Long Term Investments</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell key={index}>{formatNumber(value.longTermInvestments)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>
				      		<Table.Row>
				        		<Table.Cell>Other Assets</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell key={index}>{formatNumber(value.otherAssets)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>
				      		<Table.Row>
				        		<Table.Cell>Goodwill</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell key={index}>{formatNumber(value.Goodwill)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>
				      		<Table.Row>
				        		<Table.Cell>Property/Plant Equipment</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell key={index}>{formatNumber(value.propertyPlantEquipment)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>

				      		<Table.Row>
				        		<Table.Cell active>Current Liabilities</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell active key={index}>{formatNumber(value.totalCurrentLiabilities)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>
				      		<Table.Row>
				        		<Table.Cell>Accounts Payable</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell key={index}>{formatNumber(value.accountsPayable)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>
				      		<Table.Row>
				        		<Table.Cell>Minority Interest</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell key={index}>{formatNumber(value.minorityInterest)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>				      		
				      		<Table.Row>
				        		<Table.Cell>Other Liabilities</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell key={index}>{formatNumber(value.otherLiabilities)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>
				      		<Table.Row>
				        		<Table.Cell>Long Term Debt</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell key={index}>{formatNumber(value.longTermDebt)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>
				      		<Table.Row>
				        		<Table.Cell>Total Liabilities</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell key={index}>{formatNumber(value.totalLiabilities)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>

				      		<Table.Row>
				        		<Table.Cell active>Stock Holders Equity</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell active key={index}>{formatNumber(value.shareholderEquity)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>
				      		<Table.Row>
				        		<Table.Cell>Common Stock</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell key={index}>{formatNumber(value.commonStock)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>
				      		<Table.Row>
				        		<Table.Cell>Capital Surplus</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell key={index}>{formatNumber(value.capitalSurplus)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>				      						      						      		
				      		<Table.Row>
				        		<Table.Cell>Retained Earnings</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell key={index}>{formatNumber(value.retainedEarnings)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>
				      		<Table.Row>
				        		<Table.Cell>Treasury Stock</Table.Cell>
				        		{
				      				balanceSheet.map((value, index) => {
				        				return(<Table.Cell key={index}>{formatNumber(value.treasuryStock)}</Table.Cell>)
				      				})
				      			}
				      		</Table.Row>
				      						      						      				      						      						      					      						      						      						    					    					      						      						      		{}
				    	</Table.Body>
				  	</Table>
			)			
		};

		const chartView = () => {
			return (
				<Grid id="charts-container">
					<Grid.Row>
						<Grid.Column width={7} id="chart-column1">
								<ResponsiveContainer id="bar-chart-responsive" width={500} height="100%">
									<BarChart id="bar-chart" data={orderedBalanceSheet}>									  	
									  	<XAxis dataKey="fiscalYear" />
									  	<YAxis tickSize={10} />
									  	<Tooltip />
									  	<Legend />
									  	<Bar dataKey="currentAssets" fill="#8884d8" />
									  	<Bar dataKey="totalCurrentLiabilities" fill="#82ca9d" />
									</BarChart>
								</ResponsiveContainer>
      					</Grid.Column>
      					<Grid.Column width={7}>
      						<ResponsiveContainer id="pie-chart-responsive" width={500} height="100%">
								<PieChart width={730} height={250}>
								  <Pie data={orderedBalanceSheet} dataKey="totalAssets" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
								  <Pie data={orderedBalanceSheet} dataKey="totalLiabilities" nameKey="totalCurrentLiabilities" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
								</PieChart>
							</ResponsiveContainer>
      					</Grid.Column>
					</Grid.Row>
				</Grid>
			)
		}

	    return (
	    	<div>
	    		<Label onClick={this.toggleView} as="a">Table</Label>  |  <Label onClick={this.toggleView} as="a">Charts</Label>
	    		{ this.state.toggleView === "Table" ? financialsTable() : chartView()}
	    	</div>
	    );
	}
}

export default BalanceSheet;
