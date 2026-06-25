import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ListTransactions from './ListTransactions';

describe('ListTransactions Component', () => {
	const transactions = [
		{ id: '1', description: 'Salary', value: 5000 },
		{ id: '2', description: 'Bonus', value: 1000 }
	];

	it('renders title and transactions correctly', () => {
		render(
			<ListTransactions
				name='Income'
				color='#28b9b5'
				transactions={transactions}
			/>
		);

		const title = screen.getByText('Income');
		expect(title).toBeInTheDocument();
		expect(title).toHaveStyle({ color: 'rgb(40, 185, 181)' }); // Hex #28b9b5 to RGB

		expect(screen.getByText('Salary')).toBeInTheDocument();
		expect(screen.getByText('$ 5000')).toBeInTheDocument();
		expect(screen.getByText('Bonus')).toBeInTheDocument();
		expect(screen.getByText('$ 1000')).toBeInTheDocument();
	});

	it('renders empty list when no transactions provided', () => {
		render(
			<ListTransactions
				name='Expenses'
				color='#ff5049'
				transactions={[]}
			/>
		);

		expect(screen.getByText('Expenses')).toBeInTheDocument();
		expect(screen.queryByRole('paragraph')).not.toBeInTheDocument();
	});
});
