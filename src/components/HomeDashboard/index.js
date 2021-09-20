import React, { Component } from "react";
import { Input, Button } from 'semantic-ui-react';
import CompanyDashboard from '../CompanyDashboard/index';
import './index.css';

class HomeDashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: '',
            companyData: null,
            companyChart: null,
            companyNews: null,
            income: null,
            balanceSheet: null,
            cashFlow: null,
            price: null,
            dateRange: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.fetchFinancialData = this.fetchFinancialData.bind(this);
    }

    handleChange(event) {
        const formatSymbol = event.target.value.toUpperCase();
        this.setState({value: formatSymbol});
    }

    async fetchFinancialData(){
        console.log('fetching...');
        const bulkRequest = `https://sandbox.iexapis.com/stable/stock/${this.state.value}/batch?types=company,chart,news,price&range=5y&token=Tsk_6fc44360c16149f2b63503e4cdd0ebbc`;
        const financialsRequest = `https://sandbox.iexapis.com/stable/stock/${this.state.value}/batch?types=balance-sheet,income,cash-flow&period=annual&last=4&token=Tsk_6fc44360c16149f2b63503e4cdd0ebbc`;

        fetch(bulkRequest)
        .then(response => response.json())
        .then((data) => {
            this.setState({
                companyData: data.company,
                companyChart: data.chart,
                companyNews: data.news,
                price: data.price       
            });

            return fetch(financialsRequest)
        })
        .then(response => response.json())
        .then((data) => {
            this.setState({
                income: data.income,
                balanceSheet: data["balance-sheet"],
                cashFlow: data["cash-flow"]
            })
        })
    }


    render(){
        return (
            <div className="App">
                <div id="nav-container">
                    <div id="input-container">
                        <Input name="symbol" id="ticker-input" placeholder='Enter Ticker Symbol...' value={this.state.value} onChange={this.handleChange}/>
                        <Button id="search-button" ref={this.textInput} onClick={this.fetchFinancialData}>Search</Button>
                    </div>
                </div>
                <div id="app-body">
                    {!this.state.companyData ? <h1>Please enter ticker above...</h1> : <CompanyDashboard companyData={this.state.companyData} companyChart={this.state.companyChart} companyNews={this.state.companyNews} balanceSheet={this.state.balanceSheet} income={this.state.income} cashFlow={this.state.cashFlow} price={this.state.price} />}
                </div>
            </div>
        );
    } 
}

export default HomeDashboard;