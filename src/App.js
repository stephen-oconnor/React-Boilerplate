import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
	render() {
		return (
			<main role="main">
				<h1>React App</h1>
			</main>
		);
	}
}

export default hot(module)(App);
