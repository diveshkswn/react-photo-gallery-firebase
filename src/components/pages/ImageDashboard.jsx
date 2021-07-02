/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './ImageDashboard.css';
import { motion } from 'framer-motion';
import UploadForm from '../UploadForm';
import useFirestore from '../../customHooks/useFirestore';
import Modal from '../Modal';

function ImageDashboard() {
  const [selectedImg, setSelectedImg] = useState();
  const { docs } = useFirestore('images');

  function populateImages(img) {
    return (
      <motion.div
        key={img.id}
        className="img_wrap"
        layout // Layout property is used to animate shift in elements
        whileHover={{ opacity: 1 }} // we have set opacity to 0.8 in css
      >
        <motion.img
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ delay: 2 }}
          src={img.imgUrl}
          onClick={() => { setSelectedImg(img.imgUrl); }}
          alt="img_"
          className="img_class"
        />
      </motion.div>
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
      <Modal imgURL={selectedImg} setSelectedImg={setSelectedImg} />
    </div>
  );
}

export default ImageDashboard;
