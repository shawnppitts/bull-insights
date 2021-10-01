import React from 'react';
import HomeDashboard from './components/HomeDashboard/index';
import CompanyBanner from './components/CompanyBanner/index';
import Navbar from './components/Navbar/index';
import { useAuth0 } from "@auth0/auth0-react";
import { Grid} from 'semantic-ui-react';
import './App.css';

const App = () => {
    const { isAuthenticated } = useAuth0();

    return(
  		<Grid>
      		<Grid.Column id="column1" width={2}>
        		<Navbar />
      		</Grid.Column>

     		<Grid.Column id="column2" width={14}>
        		{ isAuthenticated ? <HomeDashboard /> : <CompanyBanner />}
     		</Grid.Column>
  		</Grid>              
    );    
}

export default App;