import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
require('dotenv').config();

console.log(process.env.REACT_APP_AUTH0_DOMAIN_DEVELOPMENT);

ReactDOM.render(
  	<Auth0Provider domain={process.env.REACT_APP_AUTH0_DOMAIN_DEVELOPMENT} clientId={process.env.REACT_APP_AUTH0_CLIENT_ID_DEVELOPMENT} redirectUri={window.location.origin}>
    	<App />
  	</Auth0Provider>,
  	document.getElementById('root')
);
