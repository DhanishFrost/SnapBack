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
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gray-900 rounded-lg shadow-md p-4 w-96"> {/* Increased width */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold text-white">Camera Preview</h2>
        </div>
        <div className="relative aspect-w-16 aspect-h-12"> {/* Adjusted aspect ratio */}
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="rounded-lg w-full h-full"
          />
        </div>
        <div className="text-center mt-4">
          <button
            onClick={capture}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md mr-2"
          >
            Capture
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>


  );
}

export default CameraModal;
