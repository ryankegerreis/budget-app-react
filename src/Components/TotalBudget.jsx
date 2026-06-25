import React from 'react';

export default React.memo(function TotalBudget(props) {
	return (
		<div id='total-budget-root'>
			<h2>Available Budget In November</h2>
			<div>
				<h1>
					{props.total >= 0 ? '+' : '-'} {props.total}
				</h1>
			</div>
			<div className='budget-spacing' id='budget-income'>
				<h4>Income</h4>
				<h4 className='budget-counter'>+ {props.income}</h4>
			</div>
			<div className='budget-spacing' id='budget-expenses'>
				<h4>Expenses</h4>
				<h4 className='budget-counter'>- {props.expenses}</h4>
			</div>
		</div>
	);
});
