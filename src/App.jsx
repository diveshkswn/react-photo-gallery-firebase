import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <div className="title_content">
          {' '}
          <h2 className="title_heading">Photo Gallery</h2>
        </div>

        <div className="app_content_glass">
          <h2>Hello Glassmorphism</h2>
          <UploadForm />

        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
