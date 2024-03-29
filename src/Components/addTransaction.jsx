import React from 'react';

export default function addTransaction(props) {
	return (
		<div id='transaction-root'>
			{/* Add a transaction */}
			<form>
				<select
					id='select'
					onChange={props.changeHandler.bind(this)}
					name='posOrNeg'
					value={props.posOrNeg}>
					<option value='+'>+</option>
					<option value='-'>-</option>
				</select>

				<label>
					<input
						className='add'
						name='transactionDesc'
						value={props.description}
						placeholder='Description'
						onChange={props.changeHandler.bind(this)}
						type='text'
						required
					/>
				</label>

				<label>
					<input
						className='add'
						name='transactionValue'
						onChange={props.changeHandler.bind(this)}
						value={props.value}
						placeholder='Amount'
						type='number'
						required
					/>
				</label>

				<button id='button' onClick={props.submit} type='button'>
					Submit
				</button>
			</form>
		</div>
	);
}
