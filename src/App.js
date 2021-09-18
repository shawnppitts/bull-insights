import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/index';
import Signup from './components/Signup/index';
import HomePage from './components/HomePage/index';
// import HomeDashboard from './components/HomeDashboard/index';
import Navbar from './components/Navbar/index';
import './App.css';

class App extends Component{
    render(){
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/signup">
                            <Signup />
                        </Route>                                                        
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;