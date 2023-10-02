import React, { useState } from 'react';
import { auth } from '../../firebase_setup/firebase';
import { updatePassword } from "firebase/auth";

function UpdatePassword() {
  const [newPassword, setNewPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 
  const [error, setError] = useState(null);

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    if(newPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    } else if (newPassword.length > 128) {
      setError('Password must be less than 128 characters');
      return;
    }

    try {
      await updatePassword(auth.currentUser, newPassword);
      console.log('Password updated successfully!');
      setError(null);
      setNewPassword('');
      setSuccessMessage('Password updated successfully!');
    } catch (error) {
      console.error('Error updating password:', error);
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <p className='text-red-600'>{error}</p>}
      {successMessage && <p className='text-green-600'>{successMessage}</p>}
      <form onSubmit={handleUpdatePassword}>
        <div className="relative max-lg:mx-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="bi bi-key text-gray-300 mt-1.5"></i>
          </div>
          <input
            className="w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-[#1a1a1a] text-white pl-10"
            placeholder='New Password'
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="my-4">
          <button
            className="border border-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>

  );
}

export default UpdatePassword;
