import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Transaction from './Transaction';

describe('Transaction Component', () => {
	it('renders description and value correctly', () => {
		render(<Transaction description='Groceries' value={50} />);

		expect(screen.getByText('Groceries')).toBeInTheDocument();
		expect(screen.getByText('$ 50')).toBeInTheDocument();
	});
});
