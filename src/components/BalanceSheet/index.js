import React, { Component } from 'react';
import { Grid, Table, Segment} from 'semantic-ui-react';
import { BarChart, Bar, XAxis, YAxis, AreaChart, CartesianGrid, Tooltip, Area } from 'recharts';
import PopupModal from '../PopupModal/index';
import './index.css';

class BalanceSheet extends Component{

	render(){		
		const {data} = this.props;
		let balanceSheet = data.balancesheet;

		// Reversed order for charts
		let orderedBalanceSheet = balanceSheet.map((val, index, array) => array[array.length - 1 - index]);

		const formatNumber = (value) => {
			let inThousands = value / 1000;

			return inThousands.toLocaleString(undefined, {maximumFractionDigits:0})
		}

		const financialsTable = balanceSheet.map((value, index) => {	
			return (				
				 	<Table key={index} celled className="bs-table">
				    	<Table.Header>
				      		<Table.Row>
				        		<Table.HeaderCell>{value.reportDate}</Table.HeaderCell>
				        		<Table.HeaderCell>Value (All numbers in thousands)</Table.HeaderCell>
				      		</Table.Row>
				    	</Table.Header>

				    	<Table.Body>
				      		<Table.Row>
				        		<Table.Cell>Accounts Receivables</Table.Cell>
				        		<Table.Cell>{formatNumber(value.receivables)}</Table.Cell>
				      		</Table.Row>				    					    	
				      		<Table.Row>
				        		<Table.Cell>Accounts Payable</Table.Cell>
				        		<Table.Cell>{formatNumber(value.accountsPayable)}</Table.Cell>
				      		</Table.Row>				      		
				      	    <Table.Row>
				       			<Table.Cell>Current Assets</Table.Cell>
				        		<Table.Cell>{formatNumber(value.currentAssets)}</Table.Cell>
				      		</Table.Row>
				      	    <Table.Row>
				       			<Table.Cell>Current Liabilities</Table.Cell>
				        		<Table.Cell>{formatNumber(value.currentLongTermDebt)}</Table.Cell>
				      		</Table.Row>
				      	    <Table.Row>
				       			<Table.Cell>Total Assets</Table.Cell>
				        		<Table.Cell>{formatNumber(value.totalAssets)}</Table.Cell>
				      		</Table.Row>
				      	    <Table.Row>
				       			<Table.Cell>Total Liabilities</Table.Cell>
				        		<Table.Cell>{formatNumber(value.totalLiabilities)}</Table.Cell>
				      		</Table.Row>				      						      						      		
				    	</Table.Body>
				  	</Table>
			)			
		});

	    return (
	    	<div>
  				<Grid>
    				<Grid.Row columns={3}>
      					<Grid.Column>
        					<h1>Assets</h1>
      					</Grid.Column>
      					<Grid.Column>
        					<h1>Liabilities</h1>
      					</Grid.Column>
      					<Grid.Column>
        					<h1></h1>
      					</Grid.Column>
    				</Grid.Row>
    			</Grid>
			</div>
	    );
	}
}

export default BalanceSheet;
