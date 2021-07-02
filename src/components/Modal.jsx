/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './Modal.css';
import { motion } from 'framer-motion';

function Modal(props) {
  const { imgURL, setSelectedImg } = props;

  function handleClick(event) {
    if (event.target.classList.contains('modal_main')) { setSelectedImg(); }
  }
  return (
    <>
      {
          imgURL && (
          <motion.div
            className="modal_main"
            onClick={handleClick}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img src={imgURL} alt="modal_image" />
          </motion.div>
          )
      }

    </>
  );
}

export default Modal;
