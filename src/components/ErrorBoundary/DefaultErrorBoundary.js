import React, { Component } from 'react';
import propTypes from 'prop-types';

class DefaultErrorBoundary extends Component {
	state = {
		isError: false,
	};

	static getDerivedStateFromError() {
		return { isError: true };
	}

	static propTypes = {
		children: propTypes.element.isRequired,
	};

	render() {
		const { isError } = this.state;
		const { children } = this.props;

		return isError ? <div>Error</div> : children;
	}
}

export default DefaultErrorBoundary;
