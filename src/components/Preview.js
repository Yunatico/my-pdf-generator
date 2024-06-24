import React from 'react';
import myImage from '../assets/PN-FOND-A3-240624-BD.jpg';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Font, Image } from '@react-pdf/renderer';

// Register font
Font.register({
	family: 'Montserrat',
	src: 'https://fonts.gstatic.com/s/montserrat/v10/zhcz-_WihjSQC0oHJ9TCYC3USBnSvpkopQaUR-2r7iU.ttf'
});

const styles = StyleSheet.create({
	page: {
		flexDirection: 'column',
		backgroundColor: '#E4E4E4',
		width: '100%',
		backgroundImage: `url(${myImage})`,
		margin: 0
	},
	backgroundImage: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		zIndex: 'auto'
	},
	section: {
		margin: 10,
		padding: 10,
		textAlign: 'center',
		flexGrow: 1,
		fontFamily: 'Montserrat',
		fontWeight: 600,
		fontSize: '60pt'
	},
	text: {
		position: 'absolute',
		left: '0px',
		right: '0px',
		marginHorizontal: 'auto',
		textAlign: 'center',
		justifyContent: 'center'
	}
});

const MyDocument = ({ data }) => (
	<Document>
		<Page size='A3' style={styles.page}>
			<View>
				<Image
					style={{
						height: '99%',
						width: '99%',
						marginHorizontal: 'auto'
					}}
					src={myImage}
					alt=''
				></Image>
			</View>
			<View style={styles.section}>
				<Text>Titre {data.titre}</Text>
				<Text>Texte {data.texte}</Text>
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
