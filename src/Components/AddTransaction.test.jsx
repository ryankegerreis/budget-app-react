import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AddTransaction from './AddTransaction';

describe('AddTransaction Component', () => {
	it('updates input values correctly', () => {
		render(<AddTransaction onAdd={vi.fn()} />);

		const descInput = screen.getByPlaceholderText('Description');
		const valueInput = screen.getByPlaceholderText('Amount');
		const select = screen.getByRole('combobox');

		fireEvent.change(descInput, { target: { value: 'Salary' } });
		fireEvent.change(valueInput, { target: { value: '5000' } });
		fireEvent.change(select, { target: { value: '-' } });

		expect(descInput.value).toBe('Salary');
		expect(valueInput.value).toBe('5000');
		expect(select.value).toBe('-');
	});

	it('calls onAdd with correct data and clears inputs on submission', () => {
		const handleAdd = vi.fn();
		render(<AddTransaction onAdd={handleAdd} />);

		const descInput = screen.getByPlaceholderText('Description');
		const valueInput = screen.getByPlaceholderText('Amount');
		const submitBtn = screen.getByRole('button', { name: /submit/i });

		fireEvent.change(descInput, { target: { value: 'Rent' } });
		fireEvent.change(valueInput, { target: { value: '1000' } });
		fireEvent.click(submitBtn);

		expect(handleAdd).toHaveBeenCalledWith({
			posOrNeg: '+',
			description: 'Rent',
			value: '1000'
		});

		expect(descInput.value).toBe('');
		expect(valueInput.value).toBe('');
	});

	it('does not call onAdd if description is empty', () => {
		const handleAdd = vi.fn();
		render(<AddTransaction onAdd={handleAdd} />);

		const valueInput = screen.getByPlaceholderText('Amount');
		const submitBtn = screen.getByRole('button', { name: /submit/i });

		fireEvent.change(valueInput, { target: { value: '1000' } });
		fireEvent.click(submitBtn);

		expect(handleAdd).not.toHaveBeenCalled();
	});

	it('does not call onAdd if value is empty', () => {
		const handleAdd = vi.fn();
		render(<AddTransaction onAdd={handleAdd} />);

		const descInput = screen.getByPlaceholderText('Description');
		const submitBtn = screen.getByRole('button', { name: /submit/i });

		fireEvent.change(descInput, { target: { value: 'Rent' } });
		fireEvent.click(submitBtn);

		expect(handleAdd).not.toHaveBeenCalled();
	});
});
