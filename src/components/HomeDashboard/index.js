import React, { Component } from "react";
import { Input, Button, Header, Dropdown, Icon } from 'semantic-ui-react';
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
            dateRange: '5y'
        }
        this.handleChange = this.handleChange.bind(this);
        this.fetchFinancialData = this.fetchFinancialData.bind(this);
        this.timeChange = this.timeChange.bind(this);
    }

    handleChange(event) {
        const formatSymbol = event.target.value.toUpperCase();
        this.setState({value: formatSymbol});
    }

    timeChange(event){
        const dropDownValue = event.target.innerText;

        this.setState({dateRange: dropDownValue});
    }

    async fetchFinancialData(){
        const bulkRequest = `https://sandbox.iexapis.com/stable/stock/${this.state.value}/batch?types=company,chart,news,price&range=${this.state.dateRange}&token=Tsk_6fc44360c16149f2b63503e4cdd0ebbc`;
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
        const options = [
            {
                key: '1M',
                text: '1M',
                value: '1M',
                content: '1M',
            },
            {
                key: '6M',
                text: '6M',
                value: '6M',
                content: '6M',
            },
            {
                key: '1Y',
                text: '1Y',
                value: '1Y',
                content: '1Y',
            },
            {
                key: '5Y',
                text: '5Y',
                value: '5Y',
                content: '5Y',
            },                        
        ]

        return (
            <div className="App">
                <div id="nav-container">
                    <div id="input-container">
                        <Input name="symbol" id="ticker-input" placeholder='Enter Ticker Symbol...' value={this.state.value} onChange={this.handleChange}/>
                        <Button id="search-button" ref={this.textInput} onClick={this.fetchFinancialData}>Search</Button>
                            <Icon name='calendar alternate' />
                            <Dropdown
                                inline
                                onChange={this.timeChange}
                                header='Adjust time span'
                                options={options}
                                defaultValue={options[0].value}
                            />
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