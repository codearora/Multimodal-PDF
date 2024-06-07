import React, { useState } from 'react';
import TextInput from './TextInput';
import PDFGenerator from './PDFGenerator';
import { PDFDownloadLink } from '@react-pdf/renderer';
import axios from 'axios';
import './App.css';

const fetchTextContent = async (text) => {
  try {
    const response = await axios.post('https://api-inference.huggingface.co/models/Qiliang/bart-large-cnn-samsum-ChatGPT_v3', {
      inputs: text,
    }, {
      headers: {
        Authorization: 'Bearer REACT_APP_HUGGING_FACE_API_KEY',
        'Content-Type': 'application/json'
      }
    });
    if (response.data && response.data.length > 0) {
      return response.data[0].generated_text;
    } else {
      throw new Error('No generated text found');
    }
  } catch (error) {
    console.error('Error fetching text content:', error);
    return 'Failed to generate content';
  }
};

const fetchUnsplashImage = async (text) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: text },
      headers: {
        Authorization: 'Client-ID -',
      },
    });
    if (response.data.results.length > 0) {
      return response.data.results[0].urls.small;
    } else {
      throw new Error('No image found');
    }
  } catch (error) {
    console.error('Error fetching image:', error);
    return 'https://via.placeholder.com/150'; // Placeholder image URL
  }
};

const App = () => {
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTextSubmit = async (text) => {
    setLoading(true);
    try {
      const sections = text.split('\n').filter((line) => line.trim().length > 0);
      const generatedContent = await fetchTextContent(text);
      setContent(generatedContent);

      const imagePromises = sections.map((section) => fetchUnsplashImage(section));
      const fetchedImages = await Promise.all(imagePromises);
      setImages(fetchedImages);
    } catch (error) {
      console.error('Error handling text submit:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Multi-Modal PDF Generator</h1>
      <TextInput onSubmit={handleTextSubmit} />
      {loading && <p>Generating content and fetching images...</p>}
      {content && images.length > 0 && (
        <PDFDownloadLink
          document={<PDFGenerator content={content} images={images} />}
          fileName="generated.pdf"
        >
          {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default App;
