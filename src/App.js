import React, { useState } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';
import { jsPDF } from 'jspdf';

import './App.css';

const App = () => {
	const [data, setData] = useState({ firstName: '', lastName: '' });

	const generatePDF = () => {
		const doc = new jsPDF('landscape', 'mm', 'a3');
		doc.text(`First Name: ${data.firstName}`, 10, 10);
		doc.text(`Last Name: ${data.lastName}`, 10, 20);
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
