import React, { useState } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';
import { jsPDF } from 'jspdf';
import { font } from './font';

import './App.css';

const App = () => {
	const [data, setData] = useState({ titre: '', texte: '' });

	const generatePDF = () => {
		const doc = new jsPDF('portrait', 'mm', [210, 297]);
		// Ajout de la police Montserrat
		doc.addFileToVFS('Montserrat-Regular-normal.ttf', font);
		doc.addFont('Montserrat-Regular-normal.ttf', 'Montserrat-Regular', 'normal');
		doc.setFont('Montserrat');
		// Mise en forme du texte
		doc.text(`Titre : ${data.titre}`, 10, 10);
		doc.text(`Texte : ${data.texte}`, 10, 20);
		doc.save('generated.pdf');
	};

	return (
		<div className='App'>
			<div className='form-container'>
				<Form setData={setData} />
				<button onClick={generatePDF}>Download PDF</button>
			</div>
			<div className='preview-container'>
				<Preview data={data} />
			</div>
		</div>
	);
};

export default App;
