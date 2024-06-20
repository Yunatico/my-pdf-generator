import React, { useState } from 'react';

const Form = ({ setData }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setData({ firstName, lastName });
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>First Name:</label>
				<input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
			</div>
			<div>
				<label>Last Name:</label>
				<input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
			</div>
			<button type='submit'>Update Preview</button>
		</form>
	);
};

export default Form;
