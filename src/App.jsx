import './App.css';
import React, { Component } from 'react';
import Budget from './Components/totalBudget';
import Transaction from './Components/addTransaction';
import List from './Components/ListTransactions';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total: 0,
			income: 0,
			expenses: 0,
			incomeTransactions: [],
			expenseTransactions: [],
			posOrNeg: '+',
			transactionDesc: '',
			transactionValue: ''
		};
		this.changeHandler = this.changeHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}

	changeHandler(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	submitHandler() {
		this.setState((state) => {
			const transaction = {
				description: state.transactionDesc,
				value: state.transactionValue
			};
			const value = Number(state.transactionValue);

			if (state.posOrNeg === '+') {
				return {
					incomeTransactions: [...state.incomeTransactions, transaction],
					income: state.income + value,
					total: state.total + value,
					transactionDesc: '',
					transactionValue: ''
				};
			}

			return {
				expenseTransactions: [...state.expenseTransactions, transaction],
				expenses: state.expenses + value,
				total: state.total - value,
				transactionDesc: '',
				transactionValue: ''
			};
		});
	}

	render() {
		return (
			<div id='root'>
				<div id='section1'>
					<Budget
						total={this.state.total}
						income={this.state.income}
						expenses={this.state.expenses}
					/>
				</div>
				<div id='section2'>
					<Transaction
						value={this.state.transactionValue}
						description={this.state.transactionDesc}
						changeHandler={this.changeHandler}
						posOrNeg={this.state.posOrNeg}
						submit={this.submitHandler}
					/>
					<div id='list-container'>
						<List
							color={'#28b9b5'}
							name='Income'
							transactions={this.state.incomeTransactions}
						/>
						<List
							color={'#ff5049'}
							name='Expenses'
							transactions={this.state.expenseTransactions}
						/>
					</div>
				</div>
			</div>
		);
	}
}
