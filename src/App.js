import React, { Component } from 'react';
import HomePage from './components/HomePage/index';
// import HomeDashboard from './components/HomeDashboard/index';
import Navbar from './components/Navbar/index';
import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            token: ''
        }
        this.getNavBarState = this.getNavBarState.bind(this);
    }

    getNavBarState(props){
        console.log(props);
    }

    render(){
        return (                                    
            <div className="App">
                <Navbar setNavBarState={this.getNavBarState} />
                <HomePage />
            </div>
        );
    }
}

export default App;