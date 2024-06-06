import React, { useState } from 'react';
import TextInput from './TextInput';
import PDFGenerator from './PDFGenerator';
import { PDFDownloadLink } from '@react-pdf/renderer';
import axios from 'axios';

const fetchTextContent = async (text) => {
  // Use a free text generation API or a hosted Hugging Face model
  // Here is an example using Hugging Face's hosted inference API
  const response = await axios.post(
    'https://api-inference.huggingface.co/models/gpt2',
    { inputs: text },
    {
      headers: {
        Authorization: `Bearer YOUR_HUGGINGFACE_API_KEY`,
      },
    }
  );
  return response.data[0].generated_text;
};

const fetchUnsplashImage = async (text) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: { query: text },
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
    },
  });
  return response.data.results[0].urls.small;
};

const App = () => {
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleTextSubmit = async (text) => {
    const generatedContent = await fetchTextContent(text);
    setContent(generatedContent);

    const unsplashImage = await fetchUnsplashImage(generatedContent);
    setImageUrl(unsplashImage);
  };

  return (
    <div>
      <h1>Multi-Modal PDF Generator</h1>
      <TextInput onSubmit={handleTextSubmit} />
      {content && imageUrl && (
        <PDFDownloadLink
          document={<PDFGenerator content={content} imageUrl={imageUrl} />}
          fileName="generated.pdf"
        >
          {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default App;
