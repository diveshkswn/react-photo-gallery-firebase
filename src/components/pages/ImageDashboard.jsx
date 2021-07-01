import React from 'react';
import './ImageDashboard.css';
import UploadForm from '../UploadForm';

function ImageDashboard() {
  return (
    <div className="imageDashboard_main">
      <div className="imageDashboard_uploadform">
        <UploadForm />
      </div>
      <div className="imageDashboard_imageGrid">
        <h2>hellooo</h2>
      </div>
    </div>
  );
}

export default ImageDashboard;
