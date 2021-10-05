import React, { Component } from "react";
import { Input, Button, Dropdown } from 'semantic-ui-react';
import CompanyDashboard from '../CompanyDashboard/index';
import './index.css';
require('dotenv').config();

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
            dateRange: '5y',
            requested: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.fetchFinancialData = this.fetchFinancialData.bind(this);
        this.timeChange = this.timeChange.bind(this);
    }

    handleChange(event) {
        const formatSymbol = event.target.value.toUpperCase();
        this.setState({value: formatSymbol});

        if (this.state.value != formatSymbol){
            this.setState({requested: false});
        }
    }

    timeChange(event){
        const dropDownValue = event.target.innerText;
        this.setState({
            dateRange: dropDownValue,
            requested: false
        });
    }

    async fetchFinancialData(){
        const bulkRequest = `https://sandbox.iexapis.com/stable/stock/${this.state.value}/batch?types=company,news,price,chart&range=${this.state.dateRange}&token=${process.env.REACT_APP_IEXCLOUD_SANDBOX_TOKEN}`;
        const financialsRequest = `https://sandbox.iexapis.com/stable/stock/${this.state.value}/batch?types=balance-sheet,income,cash-flow&period=annual&last=5&token=${process.env.REACT_APP_IEXCLOUD_SANDBOX_TOKEN}`;

        if (!this.state.requested){
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
                    cashFlow: data["cash-flow"],
                    requested: true
                })
            })
        }
        else {
            console.log("Already Requested")
            return;
        }
    }


    render(){
        const options = [
            {
                key: '1m',
                text: '1m',
                value: '1m',
                content: '1m',
            },
            {
                key: '6m',
                text: '6m',
                value: '6m',
                content: '6m',
            },
            {
                key: '1y',
                text: '1y',
                value: '1y',
                content: '1y',
            },
            {
                key: '5y',
                text: '5y',
                value: '5y',
                content: '5y',
            },                        
        ]

        return (
            <div className="dashboard">
                <div id="nav-container">
                    <div id="input-container">
                        <Dropdown
                            inline
                            onChange={this.timeChange}
                            header='Adjust time span'
                            options={options}
                            defaultValue={options[0].value}
                        />                    
                        <Input name="symbol" id="ticker-input" placeholder='Enter Ticker Symbol...' value={this.state.value} onChange={this.handleChange}/>                        
                        <Button icon="search" id="search-button" ref={this.textInput} onClick={this.fetchFinancialData}/>
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