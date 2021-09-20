import React, { Component } from 'react';
import Navbar from './components/Navbar/index';
import HomePage from './components/HomePage/index';


import './App.css';

class App extends Component{
    render(){
        return (
            <div>
                <Navbar />
                <HomePage />
            </div>                                    
        );
    }
}

export default App;