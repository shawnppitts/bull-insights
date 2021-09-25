import React, { Component } from 'react';
import Navbar from './components/Navbar/index';
import HomePage from './components/HomePage/index';
import HomePageBanner from './components/HomePageBanner/index';
import './App.css';

class App extends Component{
    render(){
        return (
            <div>
                <Navbar />
                <div className="app-body">
                	<HomePage />
                    <HomePageBanner />
                </div>
            </div>                                    
        );
    }
}

export default App;