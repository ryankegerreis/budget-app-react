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
		if (this.state.posOrNeg === '+') {
			let newArr = this.state.incomeTransactions.concat({
				description: this.state.transactionDesc,
				value: this.state.transactionValue
			});
			this.setState({
				...this.state,
				incomeTransactions: newArr,
				income: Number(this.state.income) + Number(this.state.transactionValue),
				total: Number(this.state.total) + Number(this.state.transactionValue),
				transactionDesc: '',
				transactionValue: ''
			});
		} else {
			let newArr = this.state.expenseTransactions.concat({
				description: this.state.transactionDesc,
				value: this.state.transactionValue
			});
			this.setState({
				...this.state,
				expenseTransactions: newArr,
				expenses:
					Number(this.state.expenses) + Number(this.state.transactionValue),
				total: Number(this.state.total) - Number(this.state.transactionValue),
				transactionDesc: '',
				transactionValue: ''
			});
		}
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
						changeHandler={e => this.changeHandler(e)}
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
