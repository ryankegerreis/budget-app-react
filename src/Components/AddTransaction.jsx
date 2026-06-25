import React, { useState } from 'react';

export default React.memo(function AddTransaction({ onAdd }) {
	const [posOrNeg, setPosOrNeg] = useState('+');
	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');

	const handleSubmit = () => {
		if (description && value) {
			onAdd({
				posOrNeg,
				description,
				value
			});
			setDescription('');
			setValue('');
		}
	};

	return (
		<div id='transaction-root'>
			<form>
				<select
					id='select'
					onChange={(e) => setPosOrNeg(e.target.value)}
					name='posOrNeg'
					value={posOrNeg}>
					<option value='+'>+</option>
					<option value='-'>-</option>
				</select>

				<label>
					<input
						className='add'
						name='transactionDesc'
						value={description}
						placeholder='Description'
						onChange={(e) => setDescription(e.target.value)}
						type='text'
						required
					/>
				</label>

				<label>
					<input
						className='add'
						name='transactionValue'
						onChange={(e) => setValue(e.target.value)}
						value={value}
						placeholder='Amount'
						type='number'
						required
					/>
				</label>

				<button id='button' onClick={handleSubmit} type='button'>
					Submit
				</button>
			</form>
		</div>
	);
});
