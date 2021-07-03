import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ImageDashboard from './components/pages/ImageDashboard';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <div className="title_content">
          {' '}
          <h2 className="title_heading">Photo Gallery</h2>
        </div>

        <div className="app_content_glass">

          <ImageDashboard />

        </div>

      </div>
    </ChakraProvider>
  );
}

export default App;
