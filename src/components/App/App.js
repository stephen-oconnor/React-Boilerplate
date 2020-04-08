import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import img from './image_cat.jpg';
import s from './styles.module.scss';

class App extends Component {
	render() {
		return (
			<main role="main">
				<h1 className={s.heading}>React App</h1>
				<img src={img} alt="Cat" />
			</main>
		);
	}
}

export default hot(module)(App);
