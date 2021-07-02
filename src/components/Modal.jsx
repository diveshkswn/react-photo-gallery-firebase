import React from 'react';
import './Modal.css';

function Modal(props) {
  const { imgURL } = props;
  return (
    <>
      {
          imgURL && (
          <div className="modal_main">
            <img src={imgURL} alt="modal_image" />
          </div>
          )
      }

    </>
  );
}

export default Modal;
