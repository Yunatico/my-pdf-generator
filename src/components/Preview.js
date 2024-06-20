import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	page: {
		flexDirection: 'column',
		backgroundColor: '#E4E4E4',
		width: '100%'
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1
	}
});

const MyDocument = ({ data }) => (
	<Document>
		<Page size='A3' style={styles.page}>
			<View style={styles.section}>
				<Text>First Name: {data.firstName}</Text>
				<Text>Last Name: {data.lastName}</Text>
			</View>
		</Page>
	</Document>
);

const Preview = ({ data }) => (
	<PDFViewer width='100%' height='100%'>
		<MyDocument data={data} />
	</PDFViewer>
);

export default Preview;
