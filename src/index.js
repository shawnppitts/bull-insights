import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
require('dotenv').config();

ReactDOM.render(
  	<Auth0Provider domain="dev-d-md6w83.us.auth0.com" clientId="MjnY27LIovv4SKcmYpqQmZO0c5ZbcqLM" redirectUri={window.location.origin}>
    	<App />
  	</Auth0Provider>,
  	document.getElementById('root')
);
