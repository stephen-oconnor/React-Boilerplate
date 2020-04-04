import React from 'react';
import { describe, it } from '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
	it('Renders without error', () => {
		render(<App />);
	});
});
