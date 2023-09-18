import React from "react";

export default function LogoutConfirmationModal({ isOpen, onRequestClose, onConfirm }) {
  return (
    isOpen && (
      <div className="inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-60"></div>
        <div className="absolute max-md:top-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-xl w-full max-w-xs">
          <h2 className="text-xl font-semibold mb-2">Confirm Logout</h2>
          <p className="mb-4">Are you sure you want to log out?</p>
          <div className="flex justify-center float-right">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={onConfirm}
            >
              Yes
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={onRequestClose}
            >
              No
            </button>
          </div>
        </div>
      </div>
    )
  );
}
