import React from 'react';
import { Document, Page, Text, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    image: {
        width: '100%',
        height: 'auto',
    },
});

const PDFGenerator = ({ content, imageUrl }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Text style={styles.section}>{content}</Text>
            <Image style={styles.image} src={imageUrl} />
        </Page>
    </Document>
);

export default PDFGenerator;
