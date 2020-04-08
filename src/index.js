import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import App from './components/App/App';
import './styles.module.scss';
import DefaultErrorBoundary from './components/ErrorBoundary/DefaultErrorBoundary';

if (process.env.NODE_ENV !== 'production') {
	var axe = require('react-axe');
	axe(React, ReactDOM, 1000);
}

ReactDOM.render(
	<React.StrictMode>
		<DefaultErrorBoundary>
			<App />
		</DefaultErrorBoundary>
	</React.StrictMode>,
	document.getElementById('app')
);
