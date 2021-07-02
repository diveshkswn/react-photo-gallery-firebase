/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './ImageDashboard.css';
import UploadForm from '../UploadForm';
import useFirestore from '../../customHooks/useFirestore';
import Modal from '../Modal';

function ImageDashboard() {
  const [selectedImg, setSelectedImg] = useState();
  const { docs } = useFirestore('images');

  function populateImages(img) {
    return (
      <div key={img.id} className="img_wrap">
        <img src={img.imgUrl} onClick={() => { setSelectedImg(img.imgUrl); }} alt="img_" className="img_class" />
      </div>
    );
  }

  return (
    <div className="imageDashboard_main">
      <div className="imageDashboard_uploadform">
        <UploadForm />
      </div>
      <div className="imageDashboard_imageGrid">
        {docs && docs.map(populateImages)}
      </div>
      <Modal imgURL={selectedImg} />
    </div>
  );
}

export default ImageDashboard;
