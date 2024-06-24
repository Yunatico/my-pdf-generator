import React, { useState } from 'react';

const Form = ({ setData }) => {
	const [titre, setTitre] = useState('');
	const [texte, setTexte] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setData({ titre, texte });
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Titre :</label>
				<input type='text' value={titre} onChange={(e) => setTitre(e.target.value)} />
			</div>
			<div>
				<label>Texte :</label>
				<input type='text' value={texte} onChange={(e) => setTexte(e.target.value)} />
			</div>
			<button type='submit'>Update Preview</button>
		</form>
	);
};

export default Form;
