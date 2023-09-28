import React, { useState, useRef } from "react";
import Webcam from "react-webcam";

function CameraModal({ isOpen, onClose, onCapture }) {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="camera-modal">
      <div className="camera-preview">
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        <button onClick={capture}>Capture</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CameraModal;
