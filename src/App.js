import React from 'react';
import { Component } from "react";
import { Input, Button } from 'semantic-ui-react';
import Dashboard from './components/Dashboard/index';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: '',
            companyData: null,
            companyFinancials: null,
            companyChart: null,
            companyNews: null,
            balanceSheet: null,
            cashFlow: null,
            incomeStatement: null,
            price: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.fetchFinancialData = this.fetchFinancialData.bind(this);        
    }

    handleChange(event) {
        const formatSymbol = event.target.value.toUpperCase();
        this.setState({value: formatSymbol});
    }

    async fetchFinancialData(){
        const bulkRequest = `https://sandbox.iexapis.com/stable/stock/${this.state.value}/batch?types=company,financials,chart,news,balance-sheet,cash-flow,income,price&range=1y&token=Tsk_6fc44360c16149f2b63503e4cdd0ebbc`;

        fetch(bulkRequest)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            this.setState({
                companyData: data.company,
                companyFinancials: data.financials,
                companyChart: data.chart,
                companyNews: data.news,
                balanceSheet: data["balance-sheet"].balancesheet[0],
                cashFlow: data["cash-flow"].cashflow[0],
                incomeStatement: data.income.income[0],
                price: data.price
            });
        })
        .catch(err => console.log(err));

    }    

    render(){
        return (
            <div className="App">
                <div id="nav-container">
                    <div id="input-container">
                        <Input name="symbol" id="ticker-input" placeholder='Enter Ticker Symbol...' value={this.state.value} onChange={this.handleChange}/>
                        <Button id="search-button" onClick={this.fetchFinancialData}>Search</Button>
                    </div>
                </div>
                {!this.state.companyData ? <h1 id="fetch-message">Fetching Financial Data...</h1> : <Dashboard companyData={this.state.companyData} companyFinancials={this.state.companyFinancials} companyChart={this.state.companyChart} companyNews={this.state.companyNews} balanceSheet={this.state.balanceSheet} incomeStatement={this.state.incomeStatement} cashFlow={this.state.cashFlow} price={this.state.price}/>}
            </div>
        );
    } 
}

export default App;