import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component Integration', () => {
	it('adds income and updates budget correctly', () => {
		render(<App />);

		const descInput = screen.getByPlaceholderText('Description');
		const valueInput = screen.getByPlaceholderText('Amount');
		const submitBtn = screen.getByRole('button', { name: /submit/i });

		// Add income
		fireEvent.change(descInput, { target: { value: 'Salary' } });
		fireEvent.change(valueInput, { target: { value: '5000' } });
		fireEvent.click(submitBtn);

		// Check Total Budget (h1)
		const h1s = screen.getAllByRole('heading', { level: 1 });
		expect(h1s.find(h => /^\+\s*5000$/.test(h.textContent))).toBeInTheDocument();

		// Check Income section
		expect(screen.getByText(/^\+\s*5000$/, { selector: '.budget-counter' })).toBeInTheDocument();

		// Check Income list
		expect(screen.getByText('Salary')).toBeInTheDocument();
		expect(screen.getByText('$ 5000')).toBeInTheDocument();
	});

	it('adds expense and updates budget correctly', () => {
		render(<App />);

		const descInput = screen.getByPlaceholderText('Description');
		const valueInput = screen.getByPlaceholderText('Amount');
		const select = screen.getByRole('combobox');
		const submitBtn = screen.getByRole('button', { name: /submit/i });

		// Add expense
		fireEvent.change(select, { target: { value: '-' } });
		fireEvent.change(descInput, { target: { value: 'Rent' } });
		fireEvent.change(valueInput, { target: { value: '1000' } });
		fireEvent.click(submitBtn);

		// Check Total Budget (should be -1000 initially)
		const h1s = screen.getAllByRole('heading', { level: 1 });
		expect(h1s.find(h => /^\-\s*-1000$/.test(h.textContent))).toBeInTheDocument();

		// Check Expenses section
		expect(screen.getByText(/^\-\s*1000$/, { selector: '.budget-counter' })).toBeInTheDocument();

		// Check Expenses list
		expect(screen.getByText('Rent')).toBeInTheDocument();
		expect(screen.getByText('$ 1000')).toBeInTheDocument();
	});

	it('calculates total correctly after multiple transactions', () => {
		render(<App />);

		const descInput = screen.getByPlaceholderText('Description');
		const valueInput = screen.getByPlaceholderText('Amount');
		const select = screen.getByRole('combobox');
		const submitBtn = screen.getByRole('button', { name: /submit/i });

		// Add income 1
		fireEvent.change(descInput, { target: { value: 'Salary' } });
		fireEvent.change(valueInput, { target: { value: '5000' } });
		fireEvent.click(submitBtn);

		// Add income 2
		fireEvent.change(descInput, { target: { value: 'Bonus' } });
		fireEvent.change(valueInput, { target: { value: '1000' } });
		fireEvent.click(submitBtn);

		// Add expense 1
		fireEvent.change(select, { target: { value: '-' } });
		fireEvent.change(descInput, { target: { value: 'Rent' } });
		fireEvent.change(valueInput, { target: { value: '1200' } });
		fireEvent.click(submitBtn);

		// Add expense 2
		fireEvent.change(descInput, { target: { value: 'Food' } });
		fireEvent.change(valueInput, { target: { value: '300' } });
		fireEvent.click(submitBtn);

		// Total = 5000 + 1000 - 1200 - 300 = 4500
		const h1s = screen.getAllByRole('heading', { level: 1 });
		expect(h1s.find(h => /^\+\s*4500$/.test(h.textContent))).toBeInTheDocument();

		expect(screen.getByText(/^\+\s*6000$/, { selector: '.budget-counter' })).toBeInTheDocument();
		expect(screen.getByText(/^\-\s*1500$/, { selector: '.budget-counter' })).toBeInTheDocument();
	});
});
