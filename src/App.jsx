import './App.css';
import React, { useState, useCallback } from 'react';
import Budget from './Components/TotalBudget';
import AddTransaction from './Components/AddTransaction';
import List from './Components/ListTransactions';

export default function App() {
	const [total, setTotal] = useState(0);
	const [income, setIncome] = useState(0);
	const [expenses, setExpenses] = useState(0);
	const [incomeTransactions, setIncomeTransactions] = useState([]);
	const [expenseTransactions, setExpenseTransactions] = useState([]);

	const handleAddTransaction = useCallback((transactionData) => {
		const { posOrNeg, description, value: transactionValue } = transactionData;
		const value = Number(transactionValue);
		const id = crypto.randomUUID();

		const transaction = {
			id,
			description,
			value
		};

		if (posOrNeg === '+') {
			setIncomeTransactions((prev) => [...prev, transaction]);
			setIncome((prev) => prev + value);
			setTotal((prev) => prev + value);
		} else {
			setExpenseTransactions((prev) => [...prev, transaction]);
			setExpenses((prev) => prev + value);
			setTotal((prev) => prev - value);
		}
	}, []);

	return (
		<div id='root'>
			<div id='section1'>
				<Budget
					total={total}
					income={income}
					expenses={expenses}
				/>
			</div>
			<div id='section2'>
				<AddTransaction onAdd={handleAddTransaction} />
				<div id='list-container'>
					<List
						color={'#28b9b5'}
						name='Income'
						transactions={incomeTransactions}
					/>
					<List
						color={'#ff5049'}
						name='Expenses'
						transactions={expenseTransactions}
					/>
				</div>
			</div>
		</div>
	);
}
