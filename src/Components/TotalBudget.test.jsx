import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TotalBudget from './TotalBudget';

describe('TotalBudget Component', () => {
	it('renders total, income, and expenses correctly with positive total', () => {
		render(<TotalBudget total={1000} income={1500} expenses={500} />);

		expect(screen.getByText(/^\+\s*1000$/)).toBeInTheDocument();
		expect(screen.getByText(/^\+\s*1500$/)).toBeInTheDocument();
		expect(screen.getByText(/^\-\s*500$/)).toBeInTheDocument();
	});

	it('renders total with negative sign when total is negative', () => {
		render(<TotalBudget total={-200} income={300} expenses={500} />);

		expect(screen.getByText(/^\-\s*-200$/)).toBeInTheDocument();
		expect(screen.getByText(/^\+\s*300$/)).toBeInTheDocument();
		expect(screen.getByText(/^\-\s*500$/)).toBeInTheDocument();
	});

	it('renders zero values correctly', () => {
		render(<TotalBudget total={0} income={0} expenses={0} />);

		const plusZeros = screen.getAllByText(/^\+\s*0$/);
		expect(plusZeros).toHaveLength(2);
		expect(screen.getByText(/^\-\s*0$/)).toBeInTheDocument();
	});
});
