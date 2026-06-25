import React from 'react';
import Transaction from './Transaction';

export default React.memo(function ListTransactions(props) {
	return (
		<div className='list'>
			<h3 style={{ color: props.color }}>{props.name}</h3>
			{props.transactions.map((eachObject) => {
				return (
					<Transaction
						key={eachObject.id}
						description={eachObject.description}
						value={eachObject.value}
					/>
				);
			})}
		</div>
	);
});
